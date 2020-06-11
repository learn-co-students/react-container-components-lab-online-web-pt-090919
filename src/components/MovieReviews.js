// Code MovieReviews Here

import React from 'react';

const renderReview = ({ headline, byline, link, summary_short }) => (
  <div className='review'>
    <a className='review-link' href={link.url}>{headline}</a>
    <br />
    <i>{byline}</i>
    <blockquote>{summary_short}</blockquote>
    <br />
  </div>
)

const MovieReviews = ({ reviews }) => (
  <div className='review-list'>
    {reviews.map(review => renderReview(review))}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
