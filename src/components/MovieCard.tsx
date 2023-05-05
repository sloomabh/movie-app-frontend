import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { BsXSquare } from "react-icons/bs";
import { Movie } from "./Home";

type MovieCardProps = {
  movie: Movie;
};
const MovieCard = ({ movie }: MovieCardProps) => {
  const { removeMovieFromFavorites } = useContext(GlobalContext);

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <div className="overlay"></div>
      </Link>
      <img src={movie.Poster} alt={movie.Title} />

      <div className="inner-card-controls">
        <button
          className="ctrl-btn"
          onClick={() => removeMovieFromFavorites(movie.imdbID)}
        >
          <BsXSquare />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
