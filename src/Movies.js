import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://hoblist.com/api/movieList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category: 'movies',
            language: 'Kannada',
            genre: "all",
             sort: "voting"  
          }),
        });
        const data = await response.json();
        console.log(data); 
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {Array.isArray(movies) && movies.length > 0 ? (
        movies.map((movie) => <div key={movie.id}>{movie.title}</div>)
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default Movies;