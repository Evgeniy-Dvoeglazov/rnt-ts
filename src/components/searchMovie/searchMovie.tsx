import './searchMovie.css';
import SearchButton from '../searchButton/searchButton';
import RadioButton from '../radioButton/radioButton';
import { useRef, FormEvent } from 'react';
import { SearchMode } from '../../app/app';

interface SearchMovieProps {
  searchMode: SearchMode;
  addSearchPhrase: (arg: string) => void;
  onChange: () => void;
}

export default function SearchMovie(props: SearchMovieProps) {
  const inputRef = useRef(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    props.addSearchPhrase(inputRef.current.value);
  }

  return (
    <section className='searchMovie'>
      <h1 className='searchMovie__title'>Find your movie</h1>
      <form className='searchMovie__form' onSubmit={handleSubmit}>
        <input className='searchMovie__input' type='text' ref={inputRef} placeholder={`Enter ${props.searchMode === SearchMode.Title ? 'title' : 'genre'}`} />
        <div className='searchMovie__buttons'>
          <div className='searchMovie__filter'>
            <p className='searchMovie__filter-description'>search by</p>
            <RadioButton
              mode='title'
              checked={props.searchMode === SearchMode.Title}
              onChange={props.onChange}
              variant='withBorder'
            />
            <RadioButton
              mode='genre'
              checked={props.searchMode === SearchMode.Genre}
              onChange={props.onChange}
              variant='withBorder'
            />
          </div>
          <SearchButton />
        </div>
      </form>
    </section>
  )
}

