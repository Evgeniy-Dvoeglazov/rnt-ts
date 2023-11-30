import { MovieObject } from '../../components/movie/movie';
import { MovieActionTypes } from './movieReducer';

interface GetMoviesLoadingAction {
  type: MovieActionTypes.GET_MOVIES;
}

interface GetMoviesSuccessAction {
  type: MovieActionTypes.GET_MOVIES_SUCCESS;
  payload: MovieObject[];
}

interface GetMoviesErrorAction {
  type: MovieActionTypes.GET_MOVIES_ERROR;
  payload: string;
}

export type MovieAction = GetMoviesLoadingAction | GetMoviesSuccessAction | GetMoviesErrorAction;
