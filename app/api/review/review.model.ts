// review.model.ts
import { Schema, model } from 'mongoose'

const reviewSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: false },
    category: {
      type: String,
      enum: ['tshirt', 'hoodie', 'trousers', 'track', 'pants'],
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    stars: { type: Number, min: 0, max: 5, required: true },
    parameters: {
      delivery: { type: Number, min: 0, max: 5, default: 0 },
      quality: { type: Number, min: 0, max: 5, default: 0 },
      pricing: { type: Number, min: 0, max: 5, default: 0 },
    },
  },
  { timestamps: true }
)

export default model('Review', reviewSchema)
