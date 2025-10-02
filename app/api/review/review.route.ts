import express from 'express'
import * as reviewController from './review.controller'

const router = express.Router()

router.post('/', reviewController.addReview)
router.get('/', reviewController.getReviews)

export default router
