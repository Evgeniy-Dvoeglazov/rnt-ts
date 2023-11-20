import './app.css';
import Header from '../components/header/header';
import SearchMoviePage from '../pages/searchMoviePage/searchMoviePage';
import Footer from '../components/footer/footer';
import { useState, useCallback } from 'react';
import { MovieType } from '../components/movie/movie';

export enum SearchMode {
  Title = 'title',
  Genre = 'genre'
};

export function App() {
  const [isMovieInfoOpen, setIsMovieInfoOpen] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [searchMode, setSearchMode] = useState<SearchMode>(SearchMode.Title);
  const [selectedMovie, setSelectedMovie] = useState<MovieType>(null);

  const addSearchMode = useCallback(() => {
    setSearchMode(searchMode === SearchMode.Title
      ? SearchMode.Genre
      : SearchMode.Title);
  }, [searchMode]);

  function openMovieInfo(movie: MovieType) {
    setIsMovieInfoOpen(true);
    setSelectedMovie(movie);
    window.scrollTo(0, 0);
  }

  function addSearchPhrase(value: string) {
    setSearchPhrase(value);
  }

  function backToSearch() {
    setIsMovieInfoOpen(false)
  }

  return (
    <div className='app'>
      <Header
        movieOpened={isMovieInfoOpen}
        addSearchPhrase={addSearchPhrase}
        searchMode={searchMode}
        onChange={addSearchMode}
        selectedMovie={selectedMovie}
        backToSearch={backToSearch}
      />
      <SearchMoviePage
        onDoubleClick={openMovieInfo}
        searchPhrase={searchPhrase}
        searchMode={searchMode}
      />
      <Footer />
    </div>
  )
}
