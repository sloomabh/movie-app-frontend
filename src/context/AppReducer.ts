import { Movie } from "../components/Home";

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_FAVORITES":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    case "REMOVE_MOVIE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie: Movie) => movie.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
