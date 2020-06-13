import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ'; 
const MY_API_KEY = 'zmNDgQ3w0WXGRM666gXG9TcZAkm4reKL';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${MY_API_KEY}`;


export default class LatestMovieReviewsContainer extends Component{ 
    constructor(props){
        super(props)
        this.state = {reviews: []}
    } 
    // componentDidMount(){
    //     this.getFetchMovies()
    // } 
    componentDidMount = () =>{
   // getFetchMovies =()=>{
        fetch(URL) 
        .then(res => res.json()) 
        .then(data =>{  
            
            this.setState({reviews: data.results }) 
            
        })
        .catch(err => alert(err)) 
        
    } 
    makeMovieReviews =()=>{ 
        
        return <MovieReviews reviews={this.state.reviews}/>
    }
    render(){
        return (<div className="latest-movie-reviews"> 
           {/* <SearchableMovieReviewsContainer /> */}
            {this.makeMovieReviews()}
        </div>)
    }
}