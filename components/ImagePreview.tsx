import { Image } from 'antd'

interface ImagePreviewProps {
  previewOpen: boolean
  previewImage: string
  handleClose: () => void
  setPreviewOpen: (open: boolean) => void
}

const ImagePreview = ({
  previewOpen,
  previewImage,
  handleClose,
  setPreviewOpen,
}: ImagePreviewProps) => {
  if (!previewImage) return null

  return (
    <Image
      wrapperStyle={{ display: 'none' }}
      preview={{
        visible: previewOpen,
        onVisibleChange: setPreviewOpen,
        afterOpenChange: (visible) => !visible && handleClose(),
      }}
      src={previewImage}
      alt="image"
    />
  )
}

export default ImagePreview
