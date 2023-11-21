import Logo from '../logo/logo';
import './header.css';
import SearchMovie from '../searchMovie/searchMovie';
import MovieInfo from '../movieInfo/movieInfo';
import { SearchMode } from '../../app/app';
import { MovieObject } from '../movie/movie';
import BackToSearchButton from '../backToSearchButton/backToSearchButton';

interface HeaderProps {
  searchMode: SearchMode;
  selectedMovie: MovieObject;
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
              <BackToSearchButton
                backToSearch={props.backToSearch}
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
