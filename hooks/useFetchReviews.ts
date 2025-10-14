import { useQuery } from '@tanstack/react-query'
import cacheKeys from '@/utils/cacheKeys'
import { fetchReviews } from '@/services'

interface UseFetchReviewsParams {
  slug?: string
  page?: number
  limit?: number
}

const useFetchReviews = ({ slug, page = 1, limit = 10 }: UseFetchReviewsParams) =>
  useQuery({
    queryKey: [cacheKeys.REVIEWS, slug, page, limit],
    queryFn: () => fetchReviews({ slug, page, limit }),
    enabled: !!slug,
    placeholderData: (previousData) => previousData,
  })

export default useFetchReviews
