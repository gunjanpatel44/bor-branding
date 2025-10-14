import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { IUploadFile, UploadFileHandlerResponse } from './types'

const Bucket = process.env.AMPLIFY_BUCKET as string
if (!Bucket) throw new Error('❌ Missing AMPLIFY_BUCKET environment variable')

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
})

export const uploadFileHandler = async (
  foldername: string,
  file: IUploadFile
): Promise<UploadFileHandlerResponse> => {
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

// This is a way for signing the image and if you need to block public access for the bucket, currently we have added bucket policy

// import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

// const s3 = new S3Client({ region: 'ap-south-1' })

// async function generateSignedUrl(fileName, type) {
//   const command = new GetObjectCommand({
//     Bucket: process.env.AMPLIFY_BUCKET,
//     Key: `${type}/${fileName}`,
//   })
//   return await getSignedUrl(s3, command, { expiresIn: 3600 }) // 1 hour
// }
