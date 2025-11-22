'use client'

import { productSlugs } from '@/config/products'
import useImagePreview from '@/hooks/useImagePreview'
import useSubmitReview from '@/hooks/useSubmitReview'
import useUploadImage from '@/hooks/useUploadImage'
import { invalidateQuery } from '@/services/queryClient'
import { handleBeforeUpload } from '@/utils'
import cacheKeys from '@/utils/cacheKeys'
import { IReviewFormValues, MediaTypes } from '@/utils/types'
import { Alert, Button, Form, Input, Rate, Select, Upload } from 'antd'
import type { UploadFile } from 'antd/es/upload/interface'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import ImagePreview from './ImagePreview'

const { TextArea } = Input
const { Option } = Select

const ReviewForm = () => {
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const router = useRouter()
  const { mutateAsync: uploadImage, isPending: isUploading } = useUploadImage()
  const { mutate: submitReview, isPending: isSubmitting } = useSubmitReview()
  const { previewOpen, previewImage, handlePreview, handleClose, setPreviewOpen } =
    useImagePreview()

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
            return response.data._id
          })
        )
        mediaIds = uploadResults.filter(Boolean)
      }
      const payload = {
        customer_name,
        product_slug,
        stars,
        description,
        media: mediaIds,
      }
      submitReview(payload, {
        onSuccess: (response) => {
          toast.success(response.message)
          invalidateQuery([cacheKeys.REVIEWS])
          form.resetFields()
          router.push('/')
        },
        onError: (error) => {
          toast.error(error?.message || 'Failed to submit review')
        },
      })
    } catch {
      toast.error('An image failed to upload.')
    }
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center py-10 px-4">
      <span className="text-2xl font-semibold text-brand">Write a Product Review</span>
      <div
        className={
          'flex justify-center items-center p-5 md:p-10 border border-brand-700 rounded-2xl bg-gray-900'
        }
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ stars: 0 }}
          className="space-y-4"
        >
          {/* Name and Product */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form.Item
              name="customer_name"
              label={<span className="font-medium text-brand">Full Name</span>}
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder="e.g., Jane Doe" />
            </Form.Item>
            <Form.Item
              name="product_slug"
              label={<span className="font-medium text-brand">Product</span>}
              rules={[{ required: true, message: 'Please select a product!' }]}
            >
              <Select placeholder="Select the product you are reviewing" className="rounded-xl">
                {productSlugs.map((slug: string) => (
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
            label={<span className="font-medium text-brand">Rating</span>}
            rules={[
              { required: true, message: 'Please provide a rating!' },
              { type: 'number', min: 1, message: 'Rating cannot be zero!' },
            ]}
          >
            <Rate allowHalf />
          </Form.Item>
          {/* Review Text */}
          <Form.Item
            name="description"
            label={<span className="font-medium text-brand">Review (Optional)</span>}
          >
            <TextArea
              rows={4}
              placeholder="Share your thoughts about the product..."
              className="rounded-xl border-brand-300 focus:border-brand-700"
            />
          </Form.Item>
          {/* Image Upload */}
          <Alert
            message="Only image files allowed (max size 3 MB, max 3 files)"
            type="warning"
            style={{ marginBottom: '15px' }}
          />
          <Form.Item
            name="media"
            label={<span className="font-medium text-brand">Product Images</span>}
            valuePropName="fileList"
            getValueFromEvent={(e) => e && e.fileList}
          >
            <Upload
              multiple
              listType="picture-card"
              accept=".jpg,.jpeg,.png,.webp"
              onChange={({ fileList: newFileList }) => {
                if (newFileList.length > 3) newFileList = newFileList.slice(0, 3)
                setFileList(newFileList)
              }}
              maxCount={3}
              onRemove={handleRemove}
              beforeUpload={(file) => handleBeforeUpload(file, setFileList, fileList)}
              onPreview={handlePreview}
              fileList={fileList}
            >
              <span className="font-medium text-brand">{fileList.length <= 3 && '+ Upload'}</span>
            </Upload>
          </Form.Item>
          {/* Submit Button */}
          <Form.Item name="submit">
            <Button
              type="primary"
              htmlType="submit"
              style={{ boxShadow: 'none' }}
              loading={isUploading || isSubmitting}
              disabled={isUploading || isSubmitting}
            >
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </div>
      <ImagePreview
        previewOpen={previewOpen}
        previewImage={previewImage}
        handleClose={handleClose}
        setPreviewOpen={setPreviewOpen}
      />
    </div>
  )
}

export default ReviewForm
