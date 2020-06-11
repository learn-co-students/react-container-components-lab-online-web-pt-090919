// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

  return(
    <div className="review-list">
      <div className="review">
        <p><strong>{props.review.display_title}</strong></p>
        <p>{props.review.headline}</p>
        <p>{props.review.summary_short}</p>
      </div>
    </div>)

}

export default MovieReviews