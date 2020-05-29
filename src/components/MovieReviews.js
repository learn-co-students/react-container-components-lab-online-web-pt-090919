import React from 'react';

const MovieReviews = props => { 
     const { reviews } = props

     const styles = {
          fontWeight: "bold"
     }

     const reviewList = reviews.map((review, index) => {
          return (
               <li key={index}>
                    <div style={{marginBottom: "50px"}} className="review">
                         <p><span style={styles}>Display Title</span>: {review.display_title}</p>
                         <p><span style={styles}>Headline</span>: {review.headline}</p>
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

// byline
// "Manohla Dargis"
// critics_pick
// 1
// date_updated
// "2020-05-28 18:10:02"
// display_title
// "Circumstantial Pleasures"
// headline
// "‘Circumstantial Pleasures’ Review: The Lyrical Junkman Cometh"

// link
// {suggested_link_text: "Read the New York Times Revi…}
// mpaa_rating
// ""

// multimedia
// {height: 140, src: "https://static01.nyt.com/images…}
// opening_date
// "2020-05-29"
// publication_date
// "2020-05-28"
// summary_short
