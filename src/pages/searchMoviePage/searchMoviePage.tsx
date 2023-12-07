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

  if (loading) {
    return <h2 className="searchMoviePage__title">Loading...</h2>;
  }

  if (error) {
    return <h2 className="searchMoviePage__title">{error}</h2>;
  }

  return (
    <>
      <Header />
      <section className="searchMoviePage">
        <div className="searchMoviePage__header">
          <p className="searchMoviePage__moviesCount">
            {moviesData.length} movies found
          </p>
          <div className="searchMoviePage__filter">
            <p className="searchMoviePage__filterDescription">Sort by</p>
            <RadioButton
              mode="release date"
              checked={sortMode === SortMode.ReleaseDate}
              onChange={handleChangeRadio}
              variant="withoutBorder"
            />
            <RadioButton
              mode="title"
              checked={sortMode === SortMode.Title}
              onChange={handleChangeRadio}
              variant="withoutBorder"
            />
          </div>
        </div>
        {moviesData.length !== 0 ? (
          <MovieList movies={moviesData} />
        ) : (
          <h2 className="searchMoviePage__title">No films found</h2>
        )}
      </section>
      <Footer />
    </>
  );
}
