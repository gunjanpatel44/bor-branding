import { ISubmitReviewPayload, uploadImageResponse } from '@/utils/types'
import axios from 'axios'
import apiRoutes from './apiRoutes'

const axiosClient = axios.create()

export const uploadImage = async (payload: FormData): Promise<uploadImageResponse> =>
  axiosClient.post(apiRoutes.media, payload)

export const submitReview = async (payload: ISubmitReviewPayload): Promise<uploadImageResponse> =>
  axiosClient.post(apiRoutes.review, payload)

export const fetchReviews = () => axiosClient(apiRoutes.review)
