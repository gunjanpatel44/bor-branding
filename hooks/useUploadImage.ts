import { uploadImage } from '@/services'
import { uploadImageResponse } from '@/utils/types'
import { useMutation } from '@tanstack/react-query'

const useUploadImage = () => {
  return useMutation<uploadImageResponse, Error, FormData>({
    mutationFn: uploadImage,
  })
}

export default useUploadImage
