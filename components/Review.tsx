'use client'

import { productSlugs } from '@/config/products'
import useSubmitReview from '@/hooks/useSubmitReview'
import useUploadImage from '@/hooks/useUploadImage'
import { invalidateQuery } from '@/services/queryClient'
import cacheKeys from '@/utils/cacheKeys'
import { IReviewFormValues, MediaTypes } from '@/utils/types'
import { Button, Card, Form, Input, notification, Rate, Select, Upload } from 'antd'
import type { UploadFile } from 'antd/es/upload/interface'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const { TextArea } = Input
const { Option } = Select

const ReviewForm = () => {
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const router = useRouter()
  const { mutate: submitReview, isPending } = useSubmitReview()
  const { mutateAsync: uploadImage } = useUploadImage()

  const handleRemove = (file: UploadFile) => {
    const updatedFileList = fileList.filter((f) => f.uid !== file.uid)
    setFileList(updatedFileList)
  }

  const onFinish = async (reviewFormValues: IReviewFormValues) => {
    const { customer_name, product_slug, stars, description } = reviewFormValues
    try {
      const rawFiles = fileList.map((file) => file.originFileObj).filter(Boolean) as File[]
      let mediaIds: string[] = []
      if (rawFiles.length > 0) {
        const uploadResults = await Promise.all(
          rawFiles.map(async (file) => {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('type', MediaTypes.ProductReview)
            formData.append(
              'description',
              description || `Product review media from ${customer_name}`
            )
            const response = await uploadImage(formData)
            console.log(response, 'response')
            return response.data._id
          })
        )
        mediaIds = uploadResults.filter(Boolean)
      }
      console.log(mediaIds, '✅ All media IDs collected')
      const payload = {
        customer_name,
        product_slug,
        stars,
        description,
        media: mediaIds,
      }
      submitReview(payload, {
        onSuccess: () => {
          notification.success({ message: 'Review submitted successfully!' })
          invalidateQuery([cacheKeys.REVIEWS])
          router.push('/')
        },
        onError: (error) => {
          notification.error({
            type: 'error',
            message: error?.message || 'Failed to submit review',
          })
        },
      })
    } catch {
      notification.error({
        type: 'error',
        message: 'An image failed to upload.',
      })
    }
  }

  return (
    <div className="flex justify-center items-center p-4">
      <Card title="Write a Product Review" className="max-w-4xlw-full shadow-lg">
        <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ stars: 0 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <Form.Item
              name="customer_name"
              label="Full Name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder="e.g., Jane Doe" />
            </Form.Item>
            <Form.Item
              name="product_slug"
              label="Product"
              rules={[{ required: true, message: 'Please select a product!' }]}
            >
              <Select placeholder="Select the product you are reviewing">
                {productSlugs.map((slug) => (
                  <Option key={slug} value={slug}>
                    {slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          {/* Star Rating */}
          <Form.Item
            name="stars"
            label="Rating"
            rules={[
              { required: true, message: 'Please provide a rating!' },
              { type: 'number', min: 1, message: 'Rating cannot be zero!' },
            ]}
          >
            <Rate character={<AiFillStar />} style={{ fontSize: 24 }} />
          </Form.Item>
          {/* Review Description */}
          <Form.Item name="description" label="Review (Optional)">
            <TextArea
              rows={4}
              placeholder="What did you like or dislike? How did you use the product?"
            />
          </Form.Item>
          <Form.Item
            name="media"
            label="Product images"
            valuePropName="fileList"
            getValueFromEvent={({ fileList }) => fileList}
          >
            <Upload
              multiple
              beforeUpload={() => false}
              listType="picture-card"
              onChange={({ fileList: newFileList }) => {
                if (newFileList.length > 3) {
                  newFileList = newFileList.slice(0, 3)
                }
                setFileList(newFileList)
                form.setFieldsValue({ media: newFileList })
              }}
              onRemove={handleRemove}
              onPreview={() => false}
              fileList={fileList}
            >
              {fileList.length <= 6 && '+ Upload'}
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isPending}
              disabled={isPending}
              className="w-full"
              size="large"
            >
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default ReviewForm
