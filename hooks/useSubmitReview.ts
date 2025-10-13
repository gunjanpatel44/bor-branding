import { submitReview } from '@/services'
import { useMutation } from '@tanstack/react-query'

const useSubmitReview = () =>
  useMutation({
    mutationFn: submitReview,
  })

export default useSubmitReview
