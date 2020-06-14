import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=PYSAgY1Ffy3YsPGGghMN1efK0WuYGG1b';

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount(){
        this.fetchLatestMovieReviews()
    }
    
    
    fetchLatestMovieReviews() {
    fetch(URL) 
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }  

    render() {
        return (
       <div className= "latest-movie-reviews"> 
          <MovieReviews reviews={this.state.reviews} />
       </div>
        );
    }
}