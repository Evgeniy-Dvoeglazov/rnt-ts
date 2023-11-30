import { SelectedMovieAction } from './selectedMovieActions';
import { MovieObject } from "../../components/movie/movie";

export enum SelectedMovieActionTypes {
  SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE',
  REMOVE_SELECTED_MOVIE = 'REMOVE_SELECTED_MOVIE'
}

interface SelectedMovieState {
  selectedMovie: MovieObject | null;
}

const initialState: SelectedMovieState = {
  selectedMovie: null,
};

export const selectedMovieReducer = (state = initialState, action: SelectedMovieAction): SelectedMovieState => {
  switch (action.type) {
    case SelectedMovieActionTypes.SET_SELECTED_MOVIE:
      return {
        selectedMovie: action.payload
      };
    case SelectedMovieActionTypes.REMOVE_SELECTED_MOVIE:
      return {
        selectedMovie: null
      };
    default:
      return state;
  }
};
