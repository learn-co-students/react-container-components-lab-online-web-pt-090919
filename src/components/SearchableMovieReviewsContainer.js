import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'CmoaD3Xq0y1AflZ7Vv2V5QXYFdfer9cC';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange = (event) => {
        this.setState({
          searchTerm: event.target.value
        })
      }

    //fetch function
    searchMovies = (event) => {
        event.preventDefault();
        // this.setState({
        //     searchTerm: document.getElementById('search').value
        //   });
        //let QUERY_URL = (this.state.searchTerm ? (URL):(URL + `&query=${this.state.searchTerm}`))
        //let QUERY_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=CmoaD3Xq0y1AflZ7Vv2V5QXYFdfer9cC&query=${this.state.searchTerm}`
        fetch(URL + '&query=' + this.state.searchTerm)
        .then(res => res.json())
        .then(data => 
            this.setState({
                reviews: data.results
            })
            )
    }

    //render
    render() {
        const reviews = this.state.reviews.map((review, index)=>{
            return (<MovieReviews review={review} key={index}/>)
            })
        return(
            <div className="searchable-movie-reviews">
            Search for a review!
            <form onSubmit={this.searchMovies}>
                <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
                <input type="submit" value="Search"/>
            </form>
            {/* <input id="search" type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
            <button onClick={this.searchMovies}>Search</button> */}
            {reviews}
            </div>
        )
    }
    
}