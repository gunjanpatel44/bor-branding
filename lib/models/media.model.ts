import mongoose, { Document, Model } from 'mongoose'
import mongooseLeanVirtuals from 'mongoose-lean-virtuals'

const bucket: string = process.env.AMPLIFY_BUCKET!
const region: string = process.env.AWS_REGION!

interface IMedia extends Document {
  file_name: string
  mimetype?: string
  size?: string
  width?: number
  height?: number
  type: string
  created_at: Date
  updated_at: Date
  url: string
}

const mediaSchema = new mongoose.Schema<IMedia>(
  {
    file_name: {
      type: String,
      required: true,
    },
    mimetype: {
      type: String,
    },
    size: {
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    type: {
      type: String,
      required: true,
      enum: ['product', 'product-review'],
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
)

mediaSchema.virtual('url').get(function (this: IMedia) {
  return `https://${bucket}.s3.${region}.amazonaws.com/${this.type}/${this.file_name}`
})

mediaSchema.plugin(mongooseLeanVirtuals)

const Media: Model<IMedia> = mongoose.models.Media || mongoose.model<IMedia>('Media', mediaSchema)

export default Media
