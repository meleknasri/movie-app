import React from 'react';
import MovieCard from 'MovieCard';

function MovieList({ oppenheimer tenet blade runner arrival })
 {
  return (
    <div>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;