import './searchMoviePage.css';
import MovieList from '../../components/movieList/movieList';
import RadioButton from '../../components/radioButton/radioButton';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { MovieObject } from '../../components/movie/movie';
import { SearchMode } from '../../types/searchMode';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { getMovies } from '../../store/actionCreators.ts/movies';
import type { } from 'redux-thunk/extend-redux';

enum FilterMode {
  Title = 'title',
  ReleaseDate = 'release date'
}

export default function SearchMoviePage() {
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const { searchMode } = useTypedSelector((state) => state.searchMode);
  const { searchString } = useTypedSelector((state) => state.searchString);
  const { moviesData, loading, error } = useTypedSelector((state) => state.movie);

  const [sortedMovies, setSortedMovies] = useState<MovieObject[]>([]);
  const [filterMode, setFilterMode] = useState<FilterMode>(FilterMode.Title);

  const handleChangeRadio = useCallback(() => {
    setFilterMode(filterMode => filterMode === FilterMode.Title
      ? FilterMode.ReleaseDate
      : FilterMode.Title);
  }, []);

  const movies = useMemo(() => {
    return searchMode === SearchMode.Title
      ? sortedMovies.filter((movie: MovieObject) => movie.title.toLowerCase().includes(searchString))
      : sortedMovies.filter((movie: MovieObject) => movie.genre.toLowerCase().includes(searchString))
  }, [searchString, sortedMovies, searchMode]);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    const copyMoviesData = [...moviesData] as MovieObject[];
    setSortedMovies(filterMode === FilterMode.Title
      ? copyMoviesData.sort((a, b) => a.title.localeCompare(b.title))
      : copyMoviesData.sort((a, b) => a.year - b.year));
  }, [filterMode, moviesData]);

  if (loading) {
    return <h2 className='searchMoviePage__title'>Загрузка...</h2>
  }

  if (error) {
    return <h2 className='searchMoviePage__title'>{error}</h2>
  }

  return (
    <section className='searchMoviePage'>
      <div className='searchMoviePage__header'>
        <p className='searchMoviePage__moviesCount'>{movies.length} movies found</p>
        <div className='searchMoviePage__filter'>
          <p className='searchMoviePage__filterDescription'>Sort by</p>
          <RadioButton
            mode='release date'
            checked={filterMode === FilterMode.ReleaseDate}
            onChange={handleChangeRadio}
            variant='withoutBorder'
          />
          <RadioButton
            mode='title'
            checked={filterMode === FilterMode.Title}
            onChange={handleChangeRadio}
            variant='withoutBorder'
          />
        </div>
      </div>
      {movies.length !== 0
        ? <MovieList
          movies={movies}
        />
        : <h2 className='searchMoviePage__title'>No films found</h2>}
    </section>
  )
}
