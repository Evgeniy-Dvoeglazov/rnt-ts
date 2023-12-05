import Logo from '../logo/logo';
import './header.css';
import SearchMovie from '../searchMovie/searchMovie';
import MovieInfo from '../movieInfo/movieInfo';
import Button from '../button/button';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMovieSelector } from '../../store/selectedMovie/selectedMovieSelector';
import { SelectedMovieActionTypes } from '../../store/selectedMovie/selectedMovieReducer';

export default function Header() {
  const dispatch = useDispatch();
  const selectedMovie = useSelector(selectedMovieSelector);

  return (
    <header className='header'>
      {
        selectedMovie
          ? <>
            <div className='header__navigation'>
              <Logo />
              <Button
                onClick={() => dispatch({ type: SelectedMovieActionTypes.REMOVE_SELECTED_MOVIE })}
                variant='withoutBackground'
                title='Back to search'
              />
            </div>
            <MovieInfo
              selectedMovie={selectedMovie}
            />
          </>
          : <>
            <Logo />
            <SearchMovie />
          </>
      }
    </header>
  )
}
