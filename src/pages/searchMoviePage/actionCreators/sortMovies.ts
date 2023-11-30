import { MovieActionTypes } from '../../../store/reducers/movie/types';
import axios from 'axios';
import { SortMode } from '../../../store/reducers/sortMode/types';
import { AppDispatch } from '../../../app/appStore';

export const sortMovies = (sortMode: SortMode) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: MovieActionTypes.GET_MOVIES_START })
    axios.get(`http://localhost:3004/movies?_sort=${sortMode}`)
      .then((res) => {
        dispatch({
          type: MovieActionTypes.GET_MOVIES_SUCCESS,
          payload: res.data
        })
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: MovieActionTypes.GET_MOVIES_ERROR,
          payload: 'Что-то пошло не так...'
        })
      })
  }
}
