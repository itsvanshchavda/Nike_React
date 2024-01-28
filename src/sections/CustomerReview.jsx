import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReview = () => {
  return (
    <section className='max-container '>
      <h3 className='font-palanquin text-4xl text-center font-bold'>What Our
        <span className='text-coral-red '> Customers </span>
        Say?
      </h3>

      <p className='info-text m-auto mt-4 max-w-lg text-center'>Here genuine stories from our satisfied customers about therir exceptional experience with us.</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard key={review.customerName}
            imgURL = {review.imgURL}
            feedback = {review.feedback}
            rating = {review.rating}
            customerName = {review.customerName}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReview