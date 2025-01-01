import React from 'react';
import { useLocation } from 'react-router-dom';

function MovieDetails() {
  const location = useLocation();
  const { movie } = location.state || {};

  if (!movie) {
    return <p>No movie details available.</p>;
  }

  return (
    <div className="movie-details">
      <div className="movie-card">
        <h1 className="movie-title">{movie.title}</h1>
        <div className="movie-meta">
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Cast:</strong> {movie.cast || 'Not Available'}</p>
        </div>
        <div className="movie-description">
          <p><strong>Plot:</strong> {movie.plot || 'Not available.'}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
