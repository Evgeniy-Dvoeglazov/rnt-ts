import './searchMoviePage.css';
import MovieList from '../../components/movieList/movieList';
import { moviesData } from '../../data/moviesData';
import RadioButton from '../../components/radioButton/radioButton';
import { useState, useCallback } from 'react';

enum FilterMode {
  Title = 'title',
  ReleaseDate = 'release date'
};

export default function SearchMoviePage() {
  const [searchMode, setSearchMode] = useState<FilterMode>(FilterMode.Title);

  const handleChangeRadio = useCallback(() => {
    setSearchMode(searchMode === 'title' ? FilterMode.ReleaseDate : FilterMode.Title);
  }, [searchMode]);

  return (
    <section className='searchMoviePage'>
      <div className='searchMoviePage__header'>
        <p className='searchMoviePage__moviesCount'>{moviesData.length} movies found</p>
        <div className='searchMoviePage__filter'>
          <p className='searchMoviePage__filterDescription'>Sort by</p>
          <RadioButton
            mode='release date'
            checked={searchMode === FilterMode.ReleaseDate}
            onChange={handleChangeRadio}
            variant='withoutBorder'
          />
          <RadioButton
            mode='title'
            checked={searchMode === FilterMode.Title}
            onChange={handleChangeRadio}
            variant='withoutBorder'
          />
        </div>
      </div>
      <MovieList />
    </section>
  )
}
