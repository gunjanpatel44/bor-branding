'use client'

import useFetchReviews from '@/hooks/useFetchReviews'
import { Empty, Image, Pagination, Rate, Spin } from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'

interface ReviewListProps {
  productSlug?: string
}

const ReviewList = ({ productSlug }: ReviewListProps) => {
  const [page, setPage] = useState(1)
  const limit = 3
  const { data, isLoading, isError } = useFetchReviews({
    slug: productSlug,
    page,
    limit,
  })

  const reviews = data?.data || []
  const pagination = data?.pagination

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-60 w-full">
        <Spin size="large" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-6 text-base font-medium">
        Failed to load reviews. Please try again.
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full px-5">
      <span className="text-2xl font-semibold text-brand">Rating and Reviews</span>
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="flex flex-col justify-between bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                    {review.customer_name || 'Anonymous'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {review.created_at ? dayjs(review.created_at).format('DD MMM YYYY') : ''}
                  </p>
                </div>
                <Rate disabled allowHalf value={review.stars} />
              </div>
              {/* Review Text */}
              {review.description && (
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3 leading-relaxed">
                  {review.description}
                </p>
              )}
              {/* Media */}
              {review.media?.length ? (
                <div className="flex gap-2 mt-4 flex-wrap">
                  {review.media.map((image) => (
                    <Image key={image._id} src={image.url} alt="review-media" width={100} />
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center text-brand">
          <Empty description={<span className="font-medium text-brand">No reviews yet</span>} />
        </div>
      )}
      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <Pagination
            current={Number(pagination.currentPage)}
            total={Number(pagination.total) || 0}
            pageSize={limit}
            onChange={(page) => setPage(page)}
            showSizeChanger={false}
          />
        </div>
      )}
    </div>
  )
}

export default ReviewList
