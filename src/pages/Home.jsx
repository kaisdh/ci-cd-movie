import React from "react";
import MovieCard from "../Components/MovieCard";

function Home({ favorites, toggleFavorite }) {
  const movies = [
    {
      id: 1,
      title: "Inception",
      poster_path: "/public/images/inception.jpg",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      poster_path: "/public/images/darks-knight.jpg",
      description: "Batman faces the Joker, who wreaks havoc on Gotham City.",
    },
    {
      id: 3,
      title: "Interstellar",
      poster_path: "/public/images/installer.jpg",
      description: "A team of explorers travel through a wormhole in space.",
    },
    {
      id: 4,
      title: "Avatar",
      poster_path: "/public/images/avatar.jpg",
      description: "Humans colonize Pandora and interact with the native Na’vi.",
    },
  ];

  return (
    <div className="home">
      <h2>Popular Movies</h2>
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.includes(movie.id)}
            onFavoriteToggle={() => toggleFavorite(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

