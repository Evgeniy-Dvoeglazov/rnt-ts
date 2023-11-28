import { SelectedMovieAction, SelectedMovieState, SelectedMovieTypes } from '../../types/selectedMovie';

const initialState: SelectedMovieState = {
  selectedMovie: null,
};

export const selectedMovieReducer = (state = initialState, action: SelectedMovieAction): SelectedMovieState => {
  switch (action.type) {
    case SelectedMovieTypes.SET_SELECTED_MOVIE:
      return {
        selectedMovie: action.payload
      };
    case SelectedMovieTypes.REMOVE_SELECTED_MOVIE:
      return {
        selectedMovie: null
      };
    default:
      return state;
  }
};
