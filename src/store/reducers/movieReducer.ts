import { MovieState, MovieAction, MoviesActionTypes } from "../../types/movie";

const initialState: MovieState = {
  moviesData: [],
  loading: false,
  error: null,
}

export const movieReducer = (state = initialState, action: MovieAction): MovieState => {
  switch (action.type) {
    case MoviesActionTypes.GET_MOVIES_LOADING:
      return {
        moviesData: [], loading: true, error: null
      };
    case MoviesActionTypes.GET_MOVIES_SUCCESS:
      return {
        moviesData: action.payload, loading: false, error: null
      };
    case MoviesActionTypes. GET_MOVIES_ERROR:
      return {
        moviesData: [], loading: false, error: action.payload
      };
    default:
      return state;
  }
};
