import "./searchMovie.css";
import RadioButton from "../radioButton/radioButton";
import { useCallback, useRef } from "react";
import Button from "../button/button";
import { useSelector, useDispatch } from "react-redux";
import {
  SearchMode,
  movieSelector,
  setSearchString,
  toggleSearchMode,
} from "../../store/movie/movieStore";
import { AppDispatch } from "../../app/appStore";

export default function SearchMovie() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const { searchMode } = useSelector(movieSelector);

  const handleChangeSearchMode = useCallback(() => {
    dispatch(toggleSearchMode());
  }, [dispatch]);

  return (
    <section className="searchMovie" data-testid="searchMovie">
      <h1 className="searchMovie__title">Find your movie</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          inputRef.current &&
            dispatch(setSearchString(inputRef.current.value.toLowerCase()));
        }}
      >
        <input
          className="searchMovie__input"
          type="text"
          ref={inputRef}
          placeholder={`Enter ${
            searchMode === SearchMode.Title ? "title" : "genre"
          }`}
          data-testid="searchMovieInput"
        />
        <div className="searchMovie__buttons">
          <div className="searchMovie__filter">
            <p className="searchMovie__filter-description">search by</p>
            <RadioButton
              mode="title"
              checked={searchMode === SearchMode.Title}
              onChange={handleChangeSearchMode}
              variant="withBorder"
              data-testid="searchModeTitle"
            />
            <RadioButton
              mode="genre"
              checked={searchMode === SearchMode.Genre}
              onChange={handleChangeSearchMode}
              variant="withBorder"
              data-testid="searchModeGenre"
            />
          </div>
          <Button
            variant="withBackground"
            title="Search"
            type="submit"
            data-testid="searchMovieButton"
          />
        </div>
      </form>
    </section>
  );
}
