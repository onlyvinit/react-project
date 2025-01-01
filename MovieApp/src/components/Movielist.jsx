import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Movielist() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    axios
      .get('https://www.freetestapi.com/api/v1/movies')
      .then((response) => {
        setMovies(response.data); // Store all movies
        setFilteredMovies(response.data); // Initialize filtered movies
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setError('Failed to load movies.');
      });
  }, []);

  
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    setFilteredMovies(filtered);
  };

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="movie-list">
      <h1 className="movie-list-title">Movie List</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies by title..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {error && <p className="error-message">{error}</p>}
      <div className="movie-items">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="movie-item"
              onClick={() => handleMovieClick(movie)}
              style={{ cursor: 'pointer' }} 
            >
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-year">Year: {movie.year}</p>
              <p className="movie-genre">Genre: {movie.genre}</p>
            </div>
          ))
        ) : (
          <p className="loading-message">
            {movies.length > 0
              ? 'esi koi movie nai hai.'
              : 'Loading movies...'}
          </p>
        )}
      </div>
    </div>
  );
}

export default Movielist;
