import './searchMovie.css';
import RadioButton from '../radioButton/radioButton';
import { useCallback, useRef } from 'react';
import { SearchMode } from '../../app/app';
import Button from '../button/button';

interface SearchMovieProps {
  searchMode: SearchMode;
  clickSearchButton: (value: string) => void;
  changeSearchMode: () => void;
}

export default function SearchMovie(props: SearchMovieProps) {
  const inputRef = useRef(null);

  const handleChangeSearchMode = useCallback(() => {
      props.changeSearchMode();
  }, [props]);

  return (
    <section className='searchMovie'>
      <h1 className='searchMovie__title'>Find your movie</h1>
      <input className='searchMovie__input' type='text' ref={inputRef} placeholder={`Enter ${props.searchMode === SearchMode.Title ? 'title' : 'genre'}`} />
      <div className='searchMovie__buttons'>
        <div className='searchMovie__filter'>
          <p className='searchMovie__filter-description'>search by</p>
          <RadioButton
            mode='title'
            checked={props.searchMode === SearchMode.Title}
            onChange={handleChangeSearchMode}
            variant='withBorder'
          />
          <RadioButton
            mode='genre'
            checked={props.searchMode === SearchMode.Genre}
            onChange={handleChangeSearchMode}
            variant='withBorder'
          />
        </div>
        <Button
          onClick={() => props.clickSearchButton(inputRef.current.value)}
          variant='withBackground'
          title='Search'
        />
      </div>
    </section>
  )
}

