import { MovieActionTypes } from '../../../store/reducers/movie/types';
import axios from 'axios';
import { SearchMode } from '../../../store/reducers/searchMode/types';
import { SortMode } from '../../../store/reducers/sortMode/types';
import { AppDispatch } from '../../../app/appStore';

export const searchMovies = (sortMode: SortMode, searchMode: SearchMode, searchString: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: MovieActionTypes.GET_MOVIES_START })
    axios.get(`http://localhost:3004/movies?_sort=${sortMode}&${searchMode}=${searchString}`)
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
