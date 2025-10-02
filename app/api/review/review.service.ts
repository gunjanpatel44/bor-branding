// review.service.ts
import * as reviewDao from './review.dao'

export const addReview = async (payload) => {
  return await reviewDao.createReview(payload)
}

export const fetchReviews = async (filters) => {
  if (filters.productId) return reviewDao.getReviewsByProduct(filters.productId)
  if (filters.category) return reviewDao.getReviewsByCategory(filters.category)
  return reviewDao.getAllReviews()
}
