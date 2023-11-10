import './searchMovie.css'
import SearchButton from "../searchButton/searchButton";
import RadioButton from "../radioButton/radioButton";
import { useState, useCallback } from "react";

export default function SearchMovie() {

  const [searchMode, setSearchMode] = useState<string>('title');

  const handleChangeRadio = useCallback(() => {
    if (searchMode === 'title') {
      setSearchMode('genre');
    } else
      setSearchMode('title');
  }, [searchMode])

  return (
    <section className='searchMovie'>
      <h1 className='searchMovie__title'>Find your movie</h1>
      <form className='searchMovie__form'>
        <input className='searchMovie__input' type='text' placeholder='Quentin Tarantino' />
        <div className='searchMovie__buttons'>
          <div className='searchMovie__filter'>
            <p className='searchMovie__filter-description'>search by</p>
            <RadioButton
              mode='title'
              checked={searchMode === 'title'}
              onChange={handleChangeRadio}
            />
            <RadioButton
              mode='genre'
              checked={searchMode === 'genre'}
              onChange={handleChangeRadio}
            />
          </div>
          <SearchButton />
        </div>
      </form>
    </section>
  )
}
