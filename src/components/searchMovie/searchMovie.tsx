import './searchMovie.css';
import RadioButton from '../radioButton/radioButton';
import { useCallback, useRef } from 'react';
import { SearchMode, SearchModeTypes } from '../../types/searchMode';
import Button from '../button/button';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { SearchStringTypes } from '../../types/searchString';

export default function SearchMovie() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const { searchMode } = useTypedSelector((state) => state.searchMode)

  const handleChangeSearchMode = useCallback(() => {
    dispatch({ type: SearchModeTypes.SET_SEARCH_MODE });
  }, [dispatch]);

  return (
    <section className='searchMovie'>
      <h1 className='searchMovie__title'>Find your movie</h1>
      <input className='searchMovie__input' type='text' ref={inputRef} placeholder={`Enter ${searchMode === SearchMode.Title ? 'title' : 'genre'}`} />
      <div className='searchMovie__buttons'>
        <div className='searchMovie__filter'>
          <p className='searchMovie__filter-description'>search by</p>
          <RadioButton
            mode='title'
            checked={searchMode === SearchMode.Title}
            onChange={handleChangeSearchMode}
            variant='withBorder'
          />
          <RadioButton
            mode='genre'
            checked={searchMode === SearchMode.Genre}
            onChange={handleChangeSearchMode}
            variant='withBorder'
          />
        </div>
        <Button
          onClick={() => dispatch({ type: SearchStringTypes.SET_SEARCH_STRING, payload: inputRef.current.value })}
          variant='withBackground'
          title='Search'
        />
      </div>
    </section>
  )
}

