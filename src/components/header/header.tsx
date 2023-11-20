import Logo from '../logo/logo';
import './header.css';
import SearchMovie from '../searchMovie/searchMovie';
import MovieInfo from '../movieInfo/movieInfo';
import { SearchMode } from '../../app/app';
import { MovieType } from '../movie/movie';
import BackToSearchButton from '../backToSearchButton/backToSearchButton';

interface HeaderProps {
  movieOpened: boolean;
  searchMode: SearchMode;
  selectedMovie: MovieType;
  addSearchPhrase: (arg: string) => void;
  onChange: () => void;
  backToSearch: () => void;
}

export default function Header(props: HeaderProps) {
  return (
    <header className='header'>
      {
        props.movieOpened
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
              addSearchPhrase={props.addSearchPhrase}
              onChange={props.onChange}
              searchMode={props.searchMode}
            />
          </>
      }
    </header>
  )
}
