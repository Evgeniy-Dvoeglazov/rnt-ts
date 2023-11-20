import './searchMoviePage.css';
import MovieList from '../../components/movieList/movieList';
import { moviesData } from '../../data/moviesData';
import RadioButton from '../../components/radioButton/radioButton';
import { useState, useCallback, useEffect } from 'react';
import { MovieType } from '../../components/movie/movie';
import { SearchMode } from '../../app/app';

enum FilterMode {
  Title = 'title',
  ReleaseDate = 'release date'
};

interface SearchMoviePageProps {
  onDoubleClick: (arg: MovieType) => void;
  searchPhrase: string;
  searchMode: SearchMode;
}

export default function SearchMoviePage(props: SearchMoviePageProps) {
  const copyMoviesData = [...moviesData];
  const [movies, setMovies] = useState(copyMoviesData.sort((a, b) => a.title.localeCompare(b.title)));
  const [filterMode, setFilterMode] = useState<FilterMode>(FilterMode.Title);

  const handleChangeRadio = useCallback(() => {
    setFilterMode(filterMode === FilterMode.Title
      ? FilterMode.ReleaseDate
      : FilterMode.Title);
  }, [filterMode]);

  useEffect(() => {
    if (filterMode === FilterMode.Title) {
      setMovies(props.searchMode === SearchMode.Title
        ? copyMoviesData.filter((movie) => movie.title.toLowerCase().includes(props.searchPhrase)).sort((a, b) => a.title.localeCompare(b.title))
        : copyMoviesData.filter((movie) => movie.genre.toLowerCase().includes(props.searchPhrase)).sort((a, b) => a.title.localeCompare(b.title)));
    } else {
      setMovies(props.searchMode === SearchMode.Title
        ? copyMoviesData.filter((movie) => movie.title.toLowerCase().includes(props.searchPhrase)).sort((a, b) => a.year - b.year)
        : copyMoviesData.filter((movie) => movie.genre.toLowerCase().includes(props.searchPhrase)).sort((a, b) => a.year - b.year));
    }
  }, [props.searchPhrase, filterMode])

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
          onDoubleClick={props.onDoubleClick}
        />
        : <h2 className='searchMoviePage__title'>No films found</h2>}
    </section>
  )
}
