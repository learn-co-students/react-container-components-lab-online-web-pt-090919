import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'PYSAgY1Ffy3YsPGGghMN1efK0WuYGG1b';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;	           

// Code SearchableMovieReviewsContainer 
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: "",
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL+this.state.searchTerm)
          .then(response => response.json())
          .then(data => {
            this.setState({
                 reviews: data.results,
            })
        })
        e.preventDefault()
        e.target.reset()
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} />
                    <input type="submit" value="search" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
                <br /><br /><b>-----</b><br /><br />
            </div>
        )
    }

} 