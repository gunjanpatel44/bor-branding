import {
  FetchReviewsResponse,
  SubmitReviewPayload,
  SubmitReviewResponse,
  UploadImageResponse,
} from '@/utils/types'
import axios from 'axios'
import apiRoutes from './apiRoutes'

const axiosClient = axios.create()

export const uploadImage = async (payload: FormData): Promise<UploadImageResponse> => {
  const response = await axiosClient.post(apiRoutes.media, payload)
  return response.data
}

export const submitReview = async (payload: SubmitReviewPayload): Promise<SubmitReviewResponse> => {
  const response = await axiosClient.post(apiRoutes.review, payload)
  return response.data
}

export const fetchReviews = async (params: {
  slug?: string
  page?: number
  limit?: number
}): Promise<FetchReviewsResponse> => {
  const { slug, page = 1, limit = 10 } = params
  const query = new URLSearchParams()
  if (slug) query.append('slug', slug)
  query.append('page', page.toString())
  query.append('limit', limit.toString())
  const response = await axiosClient.get(`${apiRoutes.review}?${query.toString()}`)
  return response.data
}
