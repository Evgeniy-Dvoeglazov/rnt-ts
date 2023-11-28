import { MovieObject } from '../components/movie/movie';
export enum MoviesActionTypes {
  GET_MOVIES_LOADING = 'GET_MOVIES_LOADING',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_ERROR = 'GET_MOVIES_ERROR'
}

interface GeMoviesLoadingAction {
  type: MoviesActionTypes.GET_MOVIES_LOADING;
}

interface GetMoviesSuccessAction {
  type: MoviesActionTypes.GET_MOVIES_SUCCESS;
  payload: MovieObject[];
}

interface GetMoviesErrorAction {
  type: MoviesActionTypes.GET_MOVIES_ERROR;
  payload: string;
}

export type MovieAction = GeMoviesLoadingAction | GetMoviesSuccessAction | GetMoviesErrorAction;


export interface MovieState {
  moviesData: MovieObject[];
  loading: boolean;
  error: string | null;
}
