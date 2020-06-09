import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Cs6Phtd1ObzScMBY4bm4ROhNbOHldRcm';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

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
          .then(json => this.setState({ reviews: Array.from(json.results) }))
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