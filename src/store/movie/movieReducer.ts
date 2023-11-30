import { MovieAction } from "./movieActions";
import { MovieObject } from '../../components/movie/movie';

export enum MovieActionTypes {
  GET_MOVIES = 'GET_MOVIES',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_ERROR = 'GET_MOVIES_ERROR'
}

interface MovieState {
  moviesData: MovieObject[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  moviesData: [],
  loading: false,
  error: null,
}

export const movieReducer = (state = initialState, action: MovieAction): MovieState => {
  switch (action.type) {
    case MovieActionTypes.GET_MOVIES:
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
