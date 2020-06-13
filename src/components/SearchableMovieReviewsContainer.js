import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const MY_API_KEY = 'zmNDgQ3w0WXGRM666gXG9TcZAkm4reKL';
const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const LASTQ = `api-key=${MY_API_KEY}`;
/*https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term> */ 
/*https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=pulpfictionapi-key=zmNDgQ3w0WXGRM666gXG9TcZAkm4reKL */
// Code SearchableMovieReviewsContainer Here 

export default class SearchableMovieReviewsContainer extends Component{
    constructor(props){
        super(props)  
       
        this.state = {reviews: [], 
                      searchTerm: ''} 
        
    }  
    componentDidMount(){ 
        const FETCH =  URL + this.state.searchTerm + '&' + LASTQ  
        
       
        fetch(FETCH) 
        .then(res => res.json())
        .then(data =>{ 
            debugger
            this.setState({reviews: data.results })})
        .catch(err => alert(err))
    }
    dynamic = (e) =>{
            e.preventDefault() 
           
            this.setState({searchTerm: e.target.value}) 

    } 
    pickMovies =()=>{ 

        return <MovieReviews reviews={this.state.reviews}/>
    } 
    subySub = e =>{
        e.preventDefault() 
        const FETCH = URL + this.state.searchTerm + "&" + LASTQ 
       
        fetch(FETCH)
            .then(res => res.json())
            .then(data => { 
                
                this.setState({ reviews: data.results.slice(0,2) })
            })
            .catch(err => alert(err))
        
            

    }
    render(){
        return (<div searchable-movie-reviews> 
                <form onChange={(e) => {this.dynamic(e)} } onSubmit={(e) =>{this.subySub(e)}}> 
                    <label><b>Search</b><br/>
                    <input type="text" value={this.state.searchTerm}/>  
                    </label>
                    <input type="submit" value="submit"/>
                </form> 
                <div><h1>selected:</h1>
                {this.pickMovies()} 
                </div>
                </div>)
    }
}