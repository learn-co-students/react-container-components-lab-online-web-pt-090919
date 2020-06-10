import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSubmit = (event) => {
        fetch(URL.concat(this.state.searchTerm))
        .then(r => r.json())
        .then(d => this.setState({ reviews: d.results }))
        event.preventDefault()
        event.target.reset()
    }

    handleInputChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='search-input'>Search Reviews</label>
                    <input type="text" id="search-input" onChange={this.handleInputChange} />
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}