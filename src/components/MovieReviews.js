// Code MovieReviews Here
  
import React from 'react';

const MovieReviews = props => { 
     const { reviews } = props

     const reviewList = reviews.map((review, index) => {
          return (
               <li key={index}>
                    <div className="review">
                         <span>Display Title</span>: {review.display_title}
                         <span>Headline</span>: {review.headline}
                    </div>
               </li>
          )
     })
     return (
          <ol className="review-list">
               {reviewList}
          </ol>
     );
}

export default MovieReviews;