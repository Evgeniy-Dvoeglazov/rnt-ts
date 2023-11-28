import { Dispatch } from 'redux';
import { MovieAction, MoviesActionTypes } from '../../types/movie';
import axios from 'axios';

export const getMovies = () => {
  return function (dispatch: Dispatch<MovieAction>) {
    dispatch({ type: MoviesActionTypes.GET_MOVIES_LOADING })
    axios.get('http://localhost:3004/movies')
      .then((res) => {
        dispatch({
          type: MoviesActionTypes.GET_MOVIES_SUCCESS,
          payload: res.data
        })
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: MoviesActionTypes.GET_MOVIES_ERROR,
          payload: 'Что-то пошло не так...'
        })
      })
  }
}
