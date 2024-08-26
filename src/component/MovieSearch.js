import React from 'react'
import "./MovieSearch.css";
import ReactStars from "react-stars";

function MovieSearch({ nameChanged, ratingChanged }) {
  
    const newNameVal=(e)=>{
      nameChanged(e.target.value)
    }
    const newRatingVal=(newRating)=>{
      ratingChanged(newRating)
    }
    
  return (
    <div>
       <div className="search-container">
          <input type="text" onChange={newNameVal} /> {/* Appelle nameChanged lorsque l'utilisateur tape */}
          <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              edit={true}
              onChange={newRatingVal}
         />
     
       </div>

    </div>
  )
}

export default MovieSearch