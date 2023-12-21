import "./searchMoviePage.css";
import MovieList from "../../components/movieList/movieList";
import RadioButton from "../../components/radioButton/radioButton";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SortMode,
  getMovies,
  toggleSortMode,
} from "../../store/movie/movieStore";
import { movieSelector } from "../../store/movie/movieStore";
import { AppDispatch } from "../../app/appStore";
import { GetMoviesParams } from "../../store/movie/readMovies";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function SearchMoviePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { moviesData, loading, error, searchString, searchMode, sortMode } =
    useSelector(movieSelector);

  const handleChangeRadio = useCallback(() => {
    dispatch(toggleSortMode());
  }, [dispatch]);

  useEffect(() => {
    const sortMoviesParams: GetMoviesParams = {
      _sort: `${sortMode}`,
    };

    const searchMoviesParams: GetMoviesParams = {
      _sort: `${sortMode}`,
      [`${searchMode}`]: `${searchString}`,
    };

    dispatch(getMovies(searchString ? searchMoviesParams : sortMoviesParams));
  }, [dispatch, searchString, sortMode, searchMode]);

  return (
    <>
      <Header />
      <section className="searchMoviePage">
        {loading && <h2 className="searchMoviePage__title">Loading...</h2>}
        {error && <h2 className="searchMoviePage__title">{error}</h2>}
        {!loading && !error && (
          <>
            <div className="searchMoviePage__header">
              <p className="searchMoviePage__moviesCount">
                {moviesData.length} movies found
              </p>
              <div className="searchMoviePage__filter">
                <p className="searchMoviePage__filterDescription">Sort by</p>
                <form>
                  <RadioButton
                    mode="release date"
                    checked={sortMode === SortMode.ReleaseDate}
                    variant="withoutBorder"
                    onChange={handleChangeRadio}
                  />
                  <RadioButton
                    mode="title"
                    checked={sortMode === SortMode.Title}
                    variant="withoutBorder"
                    onChange={handleChangeRadio}
                  />
                </form>
              </div>
            </div>
            {moviesData.length !== 0 ? (
              <MovieList movies={moviesData} />
            ) : (
              <h2 className="searchMoviePage__title">No films found</h2>
            )}
          </>
        )}
      </section>
      <Footer />
    </>
  );
}
