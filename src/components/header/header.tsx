import Logo from '../logo/logo';
import './header.css';
import SearchMovie from '../searchMovie/searchMovie';
import MovieInfo from '../movieInfo/movieInfo';
import { SearchMode } from '../../app/app';
import { MovieObject } from '../movie/movie';
import Button from '../button/button';

interface HeaderProps {
  searchMode: SearchMode;
  selectedMovie: MovieObject | null;
  clickSearchButton: (value: string) => void;
  changeSearchMode: () => void;
  backToSearch: () => void;
}

export default function Header(props: HeaderProps) {
  return (
    <header className='header'>
      {
        props.selectedMovie
          ? <>
            <div className='header__navigation'>
              <Logo />
              <Button
                onClick={props.backToSearch}
                variant='withoutBackground'
                title='Back to search'
              />
            </div>
            <MovieInfo
              selectedMovie={props.selectedMovie}
            />
          </>
          : <>
            <Logo />
            <SearchMovie
              clickSearchButton={props.clickSearchButton}
              changeSearchMode={props.changeSearchMode}
              searchMode={props.searchMode}
            />
          </>
      }
    </header>
  )
}
