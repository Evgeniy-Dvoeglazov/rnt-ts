import { SelectedMovieAction, SelectedMovieState, SelectedMovieActionTypes } from './types';

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
