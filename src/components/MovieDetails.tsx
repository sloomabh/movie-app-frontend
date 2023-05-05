import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { getMovie } from "../utils/data.utils";
import { Movie } from "./Home";

const MovieDetails = () => {
  const [movie, setMovie] = useState<Movie | any>();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchMovie = async () => {
    const data = await getMovie<Movie>(
      `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
    );
    if (data) {
      setMovie(data);
      setIsLoading(false);
    }
    console.log(data);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchMovie();

    console.log(movie);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div className="movie-details">
          <div className="poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="details">
            <h2 className="title">{movie.Title}</h2>
            <div className="info">
              <p>
                <span className="label">Type:</span> {movie.Type}
              </p>
              <p>
                <span className="label">Language:</span> {movie.Language}
              </p>
              <p>
                <span className="label">Country:</span> {movie.Country}
              </p>
              <p>
                <span className="label">Genre:</span> {movie.Genre}
              </p>
              <p>
                <span className="label">Year:</span> {movie.Year}
              </p>
              <p>
                <span className="label">Rated:</span> {movie.Rated}
              </p>
              <p>
                <span className="label">Actors:</span> {movie.Actors}
              </p>
              <p>
                <span className="label">Runtime:</span> {movie.Runtime}
              </p>
              <p>
                <span className="label">Plot:</span> {movie.Plot}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MovieDetails;
