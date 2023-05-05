import React, { useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { ReactNode } from "react";
import { Movie } from "../components/Home";
type GlobalProviderProps = {
  children: ReactNode;
};

interface InitialState {
  favorites: Movie[];
  addMovieToFavorites(movie: any): any;
  removeMovieFromFavorites(id: any): any;
}
// initial state
const initialState = {
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites") as string)
    : [],
};

// create context
export const GlobalContext = React.createContext(initialState as InitialState);

// provider components
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state]);

  // actions
  const addMovieToFavorites = (movie: any) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITES", payload: movie });
  };

  const removeMovieFromFavorites = (id: any) => {
    dispatch({
      type: "REMOVE_MOVIE_FROM_FAVORITES",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        favorites: state.favorites,
        addMovieToFavorites,
        removeMovieFromFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
