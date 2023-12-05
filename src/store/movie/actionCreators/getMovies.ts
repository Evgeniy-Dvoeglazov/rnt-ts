import { MovieActionTypes } from '../movieReducer';
import axios from 'axios';
import { AppDispatch } from '../../../app/appStore';
import { SearchMode } from '../../searchMode/searchModeReducer';

export type GetMoviesParams = {
  _sort: string;
} & {
  [key in SearchMode]?: string;
};

export const getMovies = (params: GetMoviesParams) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: MovieActionTypes.GET_MOVIES })
    axios.get(`http://localhost:3004/movies`, { params })
      .then((res) => {
        dispatch({
          type: MovieActionTypes.GET_MOVIES_SUCCESS,
          payload: res.data
        })
      })
      .catch(() => {
        dispatch({
          type: MovieActionTypes.GET_MOVIES_ERROR,
          payload: 'Что-то пошло не так...'
        })
      })
  }
}
