import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
/* accéder à la valeur de ces paramètres dynamiques dans votre composant, vous utilisez le hook useParams */
import MovieData from './MovieData'; 

function Description() {
  const { id } = useParams(); // Utilisez le hooks useParams pour récupérer le paramètre id a partir de lurl
  // Utilisez l'id pour charger les données correspondantes ou effectuer d'autres actions
  
  const navigate = useNavigate();

  /* recherche do movie de l id correspondant */
  const movie = MovieData.find((movie) => movie.id === parseInt(id));
   // Use parseInt to convert id to a number, useParams retourne des string

  if (!movie) {
    return <div>Movie not found!</div>;
  }
  
  return (
    <div >
    <button onClick={() => navigate(-1)}>Back</button> {/* Button to navigate back */}
      <h1>{movie.name}</h1>
      <p>{movie.description}</p>
      <div className="trailer">
        <iframe
          width="1000" height="460" 
          src={movie.trailer}
          title="YouTube video player"
          frameBorder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
    </div>
  )
}

export default Description