// Code MovieReviews Here

import React from 'react'

const MovieReviews = props => {

    function listReviews() {
        return props.reviews.map( review => <div className="review" >{review.display_title}</div> )
    }

    return (
        <div className="review-list" >
            {listReviews()}
        </div>
    )
}

export default MovieReviews