import { useState } from 'react'

import { GetProp, UploadFile, UploadProps } from 'antd'

import { getBase64 } from '@/utils'

const useImagePreview = () => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]
      file.preview = await getBase64(file.originFileObj as FileType)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }

  const handleClose = () => {
    setPreviewOpen(false)
    setPreviewImage('')
  }

  return { previewOpen, previewImage, handlePreview, handleClose, setPreviewOpen }
}

export default useImagePreview
