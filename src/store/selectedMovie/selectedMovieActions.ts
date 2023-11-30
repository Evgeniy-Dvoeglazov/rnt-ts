import { MovieObject } from "../../components/movie/movie";
import { SelectedMovieActionTypes } from "./selectedMovieReducer";

interface SetSelectedMovieAction {
  type: SelectedMovieActionTypes.SET_SELECTED_MOVIE;
  payload: MovieObject;
}

interface RemoveSelectedMovieAction {
  type: SelectedMovieActionTypes.REMOVE_SELECTED_MOVIE;
}

export type SelectedMovieAction = SetSelectedMovieAction | RemoveSelectedMovieAction;
