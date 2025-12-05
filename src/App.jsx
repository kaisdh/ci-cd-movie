import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"; 
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./css/App.css";


function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((movieId) => movieId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites ({favorites.length})</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
      </Routes>
    </div>
  );
}

export default App;

