import './app.css';
import Header from '../components/header/header';
import SearchMoviePage from '../pages/searchMoviePage/searchMoviePage';
import Footer from '../components/footer/footer';
import { useState, useCallback } from 'react';
import { MovieObject } from '../components/movie/movie';

export enum SearchMode {
  Title = 'title',
  Genre = 'genre'
}

export function App() {
  const [searchString, setSearchString] = useState('');
  const [searchMode, setSearchMode] = useState<SearchMode>(SearchMode.Title);
  const [selectedMovie, setSelectedMovie] = useState<MovieObject | null>(null);

  const openMovieInfo = useCallback((movie: MovieObject) => {
    setSelectedMovie(movie);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='app'>
      <Header
        clickSearchButton={setSearchString}
        searchMode={searchMode}
        changeSearchMode={() =>
          setSearchMode(searchMode => searchMode === SearchMode.Title
            ? SearchMode.Genre
            : SearchMode.Title)
        }
        selectedMovie={selectedMovie}
        backToSearch={() => setSelectedMovie(null)}
      />
      <SearchMoviePage
        doubleMovieClick={openMovieInfo}
        searchString={searchString}
        searchMode={searchMode}
      />
      <Footer />
    </div>
  )
}
