import './searchMoviePage.css';
import MovieList from '../../components/movieList/movieList';
import RadioButton from '../../components/radioButton/radioButton';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortMovies } from './actionCreators/sortMovies';
import { searchMovies } from './actionCreators/searchMovies';
import { searchModeSelector, searchStringSelector, movieSelector, sortModeSelector } from '../../store/selectors/selectors';
import { SortModeActionTypes } from '../../store/reducers/sortMode/types';
import { SortMode } from '../../store/reducers/sortMode/types';

export default function SearchMoviePage() {
  const dispatch = useDispatch();

  const searchMode = useSelector(searchModeSelector);
  const searchString = useSelector(searchStringSelector);
  const sortMode = useSelector(sortModeSelector);
  const { moviesData, loading, error } = useSelector(movieSelector);

  const handleChangeRadio = useCallback(() => {
    dispatch({ type: SortModeActionTypes.TOGGLE_SORT_MODE })
  }, [dispatch]);

  useEffect(() => {
    if (searchString && searchMode) {
      dispatch<any>(searchMovies(sortMode, searchMode, searchString));
    } else {
      dispatch<any>(sortMovies(sortMode))
  }}, [dispatch, searchString, sortMode, searchMode]);

  if (loading) {
    return <h2 className='searchMoviePage__title'>Загрузка...</h2>
  }

  if (error) {
    return <h2 className='searchMoviePage__title'>{error}</h2>
  }

  return (
    <section className='searchMoviePage'>
      <div className='searchMoviePage__header'>
        <p className='searchMoviePage__moviesCount'>{moviesData.length} movies found</p>
        <div className='searchMoviePage__filter'>
          <p className='searchMoviePage__filterDescription'>Sort by</p>
          <RadioButton
            mode='release date'
            checked={sortMode === SortMode.ReleaseDate}
            onChange={handleChangeRadio}
            variant='withoutBorder'
          />
          <RadioButton
            mode='title'
            checked={sortMode === SortMode.Title}
            onChange={handleChangeRadio}
            variant='withoutBorder'
          />
        </div>
      </div>
      {moviesData.length !== 0
        ? <MovieList
          movies={moviesData}
        />
        : <h2 className='searchMoviePage__title'>No films found</h2>}
    </section>
  )
}
