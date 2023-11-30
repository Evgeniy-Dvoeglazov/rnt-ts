import { MovieObject } from '../../../components/movie/movie';
export enum MovieActionTypes {
  GET_MOVIES_START = 'GET_MOVIES_START',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_ERROR = 'GET_MOVIES_ERROR'
}

interface GetMoviesLoadingAction {
  type: MovieActionTypes.GET_MOVIES_START;
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


export interface MovieState {
  moviesData: MovieObject[];
  loading: boolean;
  error: string | null;
}
