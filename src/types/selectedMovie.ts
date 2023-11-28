import { MovieObject } from "../components/movie/movie";

export interface SelectedMovieState {
  selectedMovie: MovieObject | null;
}

export enum SelectedMovieTypes {
  SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE',
  REMOVE_SELECTED_MOVIE = 'REMOVE_SELECTED_MOVIE'
}

interface SetSelectedMovieAction {
  type: SelectedMovieTypes.SET_SELECTED_MOVIE;
  payload: MovieObject;
}

interface RemoveSelectedMovieAction {
  type: SelectedMovieTypes.REMOVE_SELECTED_MOVIE;
}

export type SelectedMovieAction = SetSelectedMovieAction | RemoveSelectedMovieAction;
