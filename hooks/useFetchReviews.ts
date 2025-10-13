import { fetchReviews } from '@/services'
import cacheKeys from '@/utils/cacheKeys'
import { useQuery } from '@tanstack/react-query'

const useFetchRevies = () =>
  useQuery({
    queryKey: [cacheKeys.REVIEWS],
    queryFn: fetchReviews,
  })

export default useFetchRevies
