import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const FavoriteList = () => {
  const { favorites } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Favorite list</h1>

          <span className="count-pill">
            {favorites.length} {favorites.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {favorites.length > 0 ? (
          <div className="movie-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
export default FavoriteList;
