import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import { GlobalContext } from "../context/GlobalState";
import { Movie } from "./Home";

type ResultProps = {
  movie: Movie;
};
const ResultCard = ({ movie }: ResultProps) => {
  const { addMovieToFavorites, favorites } = useContext(GlobalContext);
  let storedMovie = favorites.find((o) => o.imdbID === movie.imdbID);
  const favoriteListDisabled = storedMovie ? true : false;

  console.log(favorites);
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
          </Link>
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          <h4 className="release-date">{movie.Year}</h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={favoriteListDisabled}
            onClick={() => addMovieToFavorites(movie)}
          >
            Add to Favorite List <BsHeartFill />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResultCard;
