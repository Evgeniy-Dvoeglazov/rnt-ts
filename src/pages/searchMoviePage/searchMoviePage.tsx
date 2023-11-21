import './searchMoviePage.css';
import MovieList from '../../components/movieList/movieList';
import { moviesData } from '../../data/moviesData';
import RadioButton from '../../components/radioButton/radioButton';
import { useState, useCallback, useEffect } from 'react';
import { MovieObject } from '../../components/movie/movie';
import { SearchMode } from '../../app/app';

enum FilterMode {
  Title = 'title',
  ReleaseDate = 'release date'
};

interface SearchMoviePageProps {
  doubleMovieClick: (movie: MovieObject) => void;
  searchString: string;
  searchMode: SearchMode;
}

export default function SearchMoviePage({ searchMode, searchString, doubleMovieClick }: SearchMoviePageProps) {
  const copyMoviesData = [...moviesData] as MovieObject[];
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [filterMode, setFilterMode] = useState<FilterMode>(FilterMode.Title);

  const handleChangeRadio = useCallback(() => {
    setFilterMode(filterMode === FilterMode.Title
      ? FilterMode.ReleaseDate
      : FilterMode.Title);
  }, [filterMode, searchMode]);

  useEffect(() => {
    setSortedMovies(filterMode === FilterMode.Title
      ? copyMoviesData.sort((a, b) => a.title.localeCompare(b.title))
      : copyMoviesData.sort((a, b) => a.year - b.year));
  }, [filterMode]);

  useEffect(() => {
    setMovies(searchMode === SearchMode.Title
      ? sortedMovies.filter((movie) => movie.title.toLowerCase().includes(searchString))
      : sortedMovies.filter((movie) => movie.genre.toLowerCase().includes(searchString)));
  }, [searchString, sortedMovies]);

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
          doubleMovieClick={doubleMovieClick}
        />
        : <h2 className='searchMoviePage__title'>No films found</h2>}
    </section>
  )
}
