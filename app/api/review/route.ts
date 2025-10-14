import connect from '@/lib/db.connect'
import Review from '@/lib/models/review.model'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  try {
    const body = await request.json()
    const { customer_name, product_slug, stars, description, media } = body
    if (!customer_name || !product_slug || !stars) {
      return NextResponse.json(
        { status: 400, message: 'Customer name, product slug, and stars are required.' },
        { status: 400 }
      )
    }
    await connect()
    const newReview = await Review.create({
      customer_name,
      product_slug,
      stars,
      description,
      media,
    })
    return NextResponse.json(
      { status: 201, message: 'Thanks for sharing review', review: newReview },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting review:', error)
    return NextResponse.json(
      { status: 500, message: 'Internal server error.', error },
      { status: 500 }
    )
  }
}

export const GET = async (request: NextRequest) => {
  try {
    await connect()
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    const page = parseInt(searchParams.get('page') || '1', 10)
    const limit = parseInt(searchParams.get('limit') || '10', 10)
    const skip = (page - 1) * limit
    const query = slug ? { product_slug: slug } : {}
    const [reviews, total] = await Promise.all([
      Review.find(query)
        .sort({ created_at: -1 })
        .skip(skip)
        .limit(limit)
        .populate({
          path: 'media',
          select: 'file_name type',
          options: { lean: { virtuals: true } },
        })
        .lean(),
      Review.countDocuments(query),
    ])
    const totalPages = Math.ceil(total / limit)
    return NextResponse.json(
      {
        status: 200,
        data: reviews,
        message: 'Reviews fetched successfully',
        pagination: {
          currentPage: page,
          totalPages,
          total,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { status: 500, message: 'Error fetching reviews.', error },
      { status: 500 }
    )
  }
}
