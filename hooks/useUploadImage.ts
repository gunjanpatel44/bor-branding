import { uploadImage } from '@/services'
import { UploadImageResponse } from '@/utils/types'
import { useMutation } from '@tanstack/react-query'

const useUploadImage = () => {
  return useMutation<UploadImageResponse, Error, FormData>({
    mutationFn: uploadImage,
  })
}

export default useUploadImage
