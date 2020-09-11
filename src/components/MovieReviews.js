// Code MovieReviews Here
import React from 'react';


const MovieReviews = props => {
    
    const renderReviews = () => props.reviews.map(review => 
            <div className="review">
                {review.display_title}
            </div>
    )

    return (
   <div className="review-list">
       {renderReviews()}
   </div>
    )
}

export default MovieReviews
