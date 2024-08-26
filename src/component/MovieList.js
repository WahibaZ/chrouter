import React, { useState, useEffect } from 'react'
import MovieCard from "./MovieCard";
import MovieData from "./MovieData";
import MovieSearch from "./MovieSearch";


function MovieList() {
  const [filteredMovies, setFilteredMovies] = useState(MovieData);// etat initial
  const [movies, setMovies] = useState(MovieData);// etat initial
  const [filterName, setFilterName] = useState(''); // Titre pour le filtrage
  const [filterRating, setFilterRating] = useState(''); // Note pour le filtrage

  // Utilisez useEffect pour filtrer les films en temps réel lorsque filterName ou filterRating change
  useEffect(() => {
    handleFilter(filterName, filterRating);
  }, [filterName, filterRating, movies]);

  const handleFilter = (name = '', rating = '') => {
    console.log('Filtering with title:', name);
    console.log('Filtering with rating:', rating);

    const filtered = movies.filter((movie) =>
      (name ? movie.name.toLowerCase().includes(name.toLowerCase()) : true) &&
      (rating ? movie.rating >= parseFloat(rating) : true)
    );

    console.log('Filtered movies:', filtered);
    setFilteredMovies(filtered);
  };


  return (
    <div>
      <MovieSearch nameChanged={setFilterName} ratingChanged={setFilterRating} />
      
      {/* {movies.map((item)=>(
        <MovieCard  key={item.id} 
                    movie={item}// movie cest le props ici
        />
        ))

        } */}
{filteredMovies.map((item) => (
        <MovieCard key={item.id} movie={item} />
      ))}

        



    </div>    

  )
}

export default MovieList