import { MovieActionTypes } from '../movieReducer';
import axios from 'axios';
import { AppDispatch } from '../../../app/appStore';

export interface getMoviesParams {
  _sort: string
}

export const getMovies = (params: getMoviesParams) => {
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
