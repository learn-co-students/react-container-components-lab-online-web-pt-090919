import React, { Component } from 'react' 

 const Review = ({review}) =>{

        return (<div>
            <h1>{review.display_title}</h1>
            <p>{review.headline}</p>
            <p>{review.summary_short}</p>
        </div>)
        }


export default Review