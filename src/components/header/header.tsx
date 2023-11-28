import Logo from '../logo/logo';
import './header.css';
import SearchMovie from '../searchMovie/searchMovie';
import MovieInfo from '../movieInfo/movieInfo';
import Button from '../button/button';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { SelectedMovieTypes } from '../../types/selectedMovie';
import { RootState } from '../../store/store';

export default function Header() {
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const { selectedMovie } = useTypedSelector((state) => state.selectedMovie);

  return (
    <header className='header'>
      {
        selectedMovie
          ? <>
            <div className='header__navigation'>
              <Logo />
              <Button
                onClick={() => dispatch({ type: SelectedMovieTypes.REMOVE_SELECTED_MOVIE })}
                variant='withoutBackground'
                title='Back to search'
              />
            </div>
            <MovieInfo />
          </>
          : <>
            <Logo />
            <SearchMovie />
          </>
      }
    </header>
  )
}
