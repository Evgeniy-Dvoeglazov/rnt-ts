import SearchButton from "../SearchButton/SearchButton";
import RadioButton from "../Radio-button/RadioButton";
import './SearchMovie.css'
import { useState } from "react";

function SearchMovie() {

  const [radioSelected, setRadioSelected] = useState<boolean>(true);

  function handleChangeRadio() {
    setRadioSelected(!radioSelected);
  }

  return (
    <section className='searchMovie'>
      <h1 className='searchMovie__title'>Find your movie</h1>
      <form className='searchMovie__form'>
        <input className='searchMovie__input' type='text' placeholder='Quentin Tarantino' />
        <div className='searchMovie__buttons'>
          <div className='searchMovie__filter'>
            <p className='searchMovie__filter-description'>search by</p>
            <RadioButton
              name='title'
              checked={radioSelected}
              changeRadio={handleChangeRadio}
            />
            <RadioButton
              name='genre'
              checked={!radioSelected}
              changeRadio={handleChangeRadio}
            />
          </div>
          <SearchButton />
        </div>
      </form>
    </section>
  )
}

export default SearchMovie;
