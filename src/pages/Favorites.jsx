import React from "react";
import MovieCard from "../Components/MovieCard";

function Favorites({ favorites, toggleFavorite }) {
  const movies = [
    {
      id: 1,
      title: "Inception",
      poster_path: "/images/inception.jpg",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      poster_path: "/images/dark-knight.jpg",
      description: "Batman faces the Joker, who wreaks havoc on Gotham City.",
    },
    {
      id: 3,
      title: "Interstellar",
      poster_path: "/images/interstellar.jpg",
      description: "A team of explorers travel through a wormhole in space.",
    },
    {
      id: 4,
      title: "Avatar",
      poster_path: "/images/avatar.jpg",
      description: "Humans colonize Pandora and interact with the native Na’vi.",
    },
  ];

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="movies-container">
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.includes(movie.id)}
              onFavoriteToggle={() => toggleFavorite(movie.id)}
            />
          ))
        ) : (
          <p>No favorite movies yet.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
