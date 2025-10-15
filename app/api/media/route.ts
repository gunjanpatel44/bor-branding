export const runtime = 'nodejs'

import connect from '@/lib/db.connect'
import Media from '@/lib/models/media.model'
import { uploadFileHandler } from '@/utils/aws'
import sizeOf from 'image-size'
import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const mediaType = formData.get('type') as string
    if (!file) {
      return NextResponse.json({ message: 'File is required' }, { status: 400 })
    }
    const fileName = `${Date.now()}_${file.name}`
    // Convert Blob to Buffer
    const fileBlob = file as Blob
    const arrayBuffer: ArrayBuffer = await fileBlob.arrayBuffer()
    const buffer: Buffer = Buffer.from(arrayBuffer)
    // Get image dimensions
    const dimensions = sizeOf(buffer)
    let isCompressed = false
    let finalBuffer = buffer
    // Compress if larger than 1MB
    if (file.size > 1_000_000) {
      let quality = 30
      if (file.size > 5_000_000 && file.size < 15_000_000) quality = 15
      if (file.size > 15_000_000) quality = 10
      const { data } = await sharp(buffer)
        .rotate()
        .jpeg({ quality })
        .toBuffer({ resolveWithObject: true })
      finalBuffer = data
      isCompressed = true
    }
    await connect()
    const newMedia = new Media({
      file_name: fileName,
      mimetype: file.type,
      size: isCompressed ? finalBuffer.length : file.size,
      width: dimensions.width,
      height: dimensions.height,
      type: mediaType,
    })
    const savedMedia = await newMedia.save()
    if (savedMedia) {
      await uploadFileHandler(mediaType, {
        name: fileName,
        data: finalBuffer,
      })
    }
    return NextResponse.json({
      status: 200,
      message: 'Media uploaded successfully',
      data: savedMedia,
    })
  } catch (error) {
    console.error('Error uploading media:', error)
    return NextResponse.json({ message: 'Failed to upload media', error }, { status: 500 })
  }
}
