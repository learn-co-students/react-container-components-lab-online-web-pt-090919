import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'BioaBgWuOxyNHAiJIJOdwUA0zBn7DILS';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
     constructor(props) {
          super(props)

          this.state = {
               reviews: []
          }
     }

     componentDidMount() {
          fetch(URL)
               .then(res => res.json())
               .then(movieData => {
                    this.setState({
                         reviews: movieData.results
                    })
               })
     }
3
     render() {
          return (
               <div className="latest-movie-reviews">
                    <MovieReviews reviews={this.state.reviews} />
               </div>
          );
     }
}


export default LatestMovieReviewsContainer;
