import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'qVan4EVyvVGIe9SPSaPP2XReymk6pRO2';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{

    constructor(props){
        super(props)

        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        this.fetchLastestMovieReview()
    }

    fetchLastestMovieReview() {
        
        fetch(URL)
            .then(response => response.json())
            .then(movieData => {
                this.setState({
                    reviews: movieData.results
                })
            })
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}