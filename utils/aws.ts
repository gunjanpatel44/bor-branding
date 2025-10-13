import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { IUploadFile, uploadFileHandlerResponse } from './types'

const Bucket = process.env.AMPLIFY_BUCKET as string
if (!Bucket) throw new Error('❌ Missing AMPLIFY_BUCKET environment variable')

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
})

export async function uploadFileHandler(
  foldername: string,
  file: IUploadFile
): Promise<uploadFileHandlerResponse> {
  try {
    const params = {
      Bucket,
      Key: `${foldername}/${file.name}`,
      Body: file.data,
    }
    const command = new PutObjectCommand(params)
    const data = await s3Client.send(command)
    return {
      status: 200,
      message: 'File uploaded successfully.',
      data,
    }
  } catch (error) {
    console.error('Error uploading file:', error)
    return {
      status: 500,
      message: 'Error uploading file.',
    }
  }
}
