import { MovieState, MovieAction, MovieActionTypes } from "./types";

const initialState: MovieState = {
  moviesData: [],
  loading: false,
  error: null,
}

export const movieReducer = (state = initialState, action: MovieAction): MovieState => {
  switch (action.type) {
    case MovieActionTypes.GET_MOVIES_START:
      return {
        ...state,
        loading: true, error: null
      };
    case MovieActionTypes.GET_MOVIES_SUCCESS:
      return {
        moviesData: action.payload, loading: false, error: null
      };
    case MovieActionTypes.GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false, error: action.payload
      };
    default:
      return state;
  }
};
