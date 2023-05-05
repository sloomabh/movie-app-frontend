import React, { useState, ChangeEvent } from "react";
import ResultCard from "./ResultCard";
import { getMovies } from "../utils/data.utils";

export type Movie = {
  imdbID: string;
  Type: string;
  Language: string;
  Country: string;
  Poster: string;
  Title: string;
  Genre: string;
  Year: string;
  Rated: string;
  Actors: string;
  Runtime: string;
  Plot: string;
};

const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    setQuery(e.target.value);

    const fetchMovies = async () => {
      const data = await getMovies<Movie[]>(
        `http://www.omdbapi.com/?s=${e.target.value}&apikey=${apiKey}`
      );

      if (data) {
        setResults(data);
      } else {
        setResults([]);
      }
    };

    fetchMovies();
    /*
    fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setResults(data.Search);
        } else {
          setResults([]);
        }
      }); */
    // console.log(results);
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.imdbID}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
