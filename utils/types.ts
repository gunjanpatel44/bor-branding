import { PutObjectCommandOutput } from '@aws-sdk/client-s3'
import { StaticImageData } from 'next/image'

// Types
export type TProductCardTheme = 'fieldsOfMemory' | 'whispersOfGrowth' | 'adikavya'

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
export interface ISubmitReviewPayload {
  customer_name: string
  product_slug: string
  stars: string
  description?: string
  media?: string[] | null
}

// API Responses
export interface uploadFileHandlerResponse extends commonResponse {
  data?: PutObjectCommandOutput
}

export interface uploadImageResponse extends commonResponse {
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

export interface submitReviewResponse extends commonResponse {
  data: IReview
}

export interface getReviewsResponse extends commonResponse {
  data: IReview[]
}
