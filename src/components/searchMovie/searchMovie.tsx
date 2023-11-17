import './searchMovie.css';
import SearchButton from '../searchButton/searchButton';
import RadioButton from '../radioButton/radioButton';
import { useState, useCallback } from 'react';

enum SearchMode {
  Title = 'title',
  Genre = 'genre'
};

export default function SearchMovie() {
  const [searchMode, setSearchMode] = useState<SearchMode>(SearchMode.Title);

  const handleChangeRadio = useCallback(() => {
    setSearchMode(searchMode === 'title' ? SearchMode.Genre : SearchMode.Title);
  }, [searchMode]);

  return (
    <section className='searchMovie'>
      <h1 className='searchMovie__title'>Find your movie</h1>
      <form className='searchMovie__form'>
        <input className='searchMovie__input' type='text' placeholder={`Enter ${searchMode === SearchMode.Title ? 'title' : 'genre'}`} />
        <div className='searchMovie__buttons'>
          <div className='searchMovie__filter'>
            <p className='searchMovie__filter-description'>search by</p>
            <RadioButton
              mode='title'
              checked={searchMode === SearchMode.Title}
              onChange={handleChangeRadio}
              variant='withBorder'
            />
            <RadioButton
              mode='genre'
              checked={searchMode === SearchMode.Genre}
              onChange={handleChangeRadio}
              variant='withBorder'
            />
          </div>
          <SearchButton />
        </div>
      </form>
    </section>
  )
}

