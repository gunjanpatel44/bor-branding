import { PutObjectCommandOutput } from '@aws-sdk/client-s3'
import { GetProp, UploadProps } from 'antd'
import { StaticImageData } from 'next/image'

// Types
export type TProductCardTheme = 'fieldsOfMemory' | 'whispersOfGrowth' | 'adikavya'
export type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

// Enums
export enum MediaTypes {
  ProductReview = 'product-review',
}

// Common Interfaces
export type IProductDescription = {
  id: number
  title: string
  desc: string
}

export interface IPagination {
  currentPage: number
  totalPages: number
  total: number
}

export interface IProduct {
  id: number
  slug: string
  name: string
  theme: TProductCardTheme
  mrp: number
  sellingPrice: number
  description: string
  category: string
  productAccordian: IProductDescription[]
  imageUrl: string | StaticImageData
  gallery: string[] | StaticImageData[]
  sizes: string[]
  ribbonText?: string
  ribbonColor?: string
  comingSoon?: boolean
}

export interface IReviewFormValues {
  customer_name: string
  product_slug: string
  stars: string
  description?: string
  uploadImage?: string
}

export interface IMediaResponse {
  _id: string
  file_name: string
  type: string
  url: string
  id: string
}

export interface IReview {
  _id: string
  customer_name: string
  product_slug: string
  stars: string
  description?: string
  media?: string[]
}

export interface IUploadFile {
  name: string
  data: Buffer | Uint8Array | Blob | string
}

// API common response
export interface commonResponse {
  status: number
  message: string
}

// API Payload
export interface SubmitReviewPayload {
  customer_name: string
  product_slug: string
  stars: string
  description?: string
  media?: string[] | null
}

// API Responses
export interface UploadFileHandlerResponse extends commonResponse {
  data?: PutObjectCommandOutput
}

export interface UploadImageResponse extends commonResponse {
  data: {
    _id: string
    id: string
    url: string
    file_name: string
    mimetype: string
    size: string
    width: number
    height: number
    type: string
    created_at: string
    updated_at: string
    __v: number
  }
}

export interface IReviewResponse {
  _id: string
  customer_name: string
  product_slug: string
  stars: number
  description: string
  media: IMediaResponse[]
  created_at: string
  updated_at: string
  __v: number
}
export interface FetchReviewsResponse extends commonResponse {
  data: IReviewResponse[]
  pagination: IPagination
}

export interface SubmitReviewResponse extends commonResponse {
  data: IReview
}

export interface GetReviewsResponse extends commonResponse {
  data: IReview[]
}
