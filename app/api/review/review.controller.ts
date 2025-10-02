import * as reviewService from './review.service'

export const addReview = async (req, res) => {
  try {
    const review = await reviewService.addReview(req.body)
    res.status(201).json(review)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const getReviews = async (req, res) => {
  try {
    const reviews = await reviewService.fetchReviews(req.query)
    res.json(reviews)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
