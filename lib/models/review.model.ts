import mongoose, { Document, Schema, models } from 'mongoose'
import Media from './media.model'

export interface IReview extends Document {
  customer_name: string
  product_slug: string
  stars: number
  description?: string
  media?: mongoose.Types.ObjectId[]
  created_at: Date
  updated_at: Date
}

const ReviewSchema = new Schema<IReview>(
  {
    customer_name: {
      type: String,
      required: [true, 'Customer name is required.'],
      trim: true,
    },
    product_slug: {
      type: String,
      required: [true, 'Product slug is required.'],
      trim: true,
    },
    stars: {
      type: Number,
      required: [true, 'Star rating is required.'],
      min: [1, 'Rating must be at least 1.'],
      max: [5, 'Rating must be at most 5.'],
    },
    description: {
      type: String,
      trim: true,
    },
    media: [
      {
        type: Schema.Types.ObjectId,
        ref: Media.modelName,
      },
    ],
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Review = models.Review || mongoose.model<IReview>('Review', ReviewSchema)

export default Review
