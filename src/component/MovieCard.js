// instraller et importer  react-rating-stars-component
/* import ReactStars from 'react-rating-stars-component'; */
import ReactStars from "react-stars";
import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';  // Import Link

function MovieCard({ movie }) {
  return (
    <div className="movie-card-container">
        <div className="movie-card">
            
      
        <img src={movie.image} alt={movie.name} />

            <h1 >{movie.name}</h1>
            <div className="row">
                
                    <ReactStars
                    count={5} /* Nombre total d'étoiles (par défaut 5). */
                    value={movie.rating} /* Note actuelle */
                    size={20} /* Taille des étoiles */
                    color2={"#ffd700"} /* Couleur des étoiles actives */
                    edit={false} /* L'utilisateur ne peut pas modifier la note */
                    />
                
                <span>{movie.date}</span>
                <span className="r">R</span>
                <span className="hd">HD</span>
             </div>
            <div className="categories">
            <Link to={`/movie/${movie.id}`}>Description</Link>
                <a href="">Episodes</a>
                <a href="">Reviews</a>
            </div>
            <p style={{ textAlign: 'justify'}}>{movie.description}</p>
            <button  className="movie-card-button">Play</button>
            
        </div>
    </div>
  );
}

export default MovieCard;
