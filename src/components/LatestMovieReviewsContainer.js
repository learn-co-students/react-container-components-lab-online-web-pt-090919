import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'CmoaD3Xq0y1AflZ7Vv2V5QXYFdfer9cC';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            reviews: []
        }
    }

    //fetch function
    componentDidMount() {
        fetch(URL)
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
            return <MovieReviews review={review} key={index}/>
          })
        return(
            <div className="latest-movie-reviews">
            {reviews}
            </div>
        )
	}

}