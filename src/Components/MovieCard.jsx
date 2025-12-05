import React, { useState } from "react";
import "../css/MovieCard.css";

function MovieCard({ movie, isFavorite, onFavoriteToggle }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="movie-card">
      <img src={movie.poster_path} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{showMore ? movie.description : `${movie.description.slice(0, 60)}...`}</p>
        <button className="view-more" onClick={() => setShowMore(!showMore)}>
          {showMore ? "View Less" : "View More"}
        </button>
        <button
          className={`heart-button ${isFavorite ? "favorite" : ""}`}
          onClick={onFavoriteToggle}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;


