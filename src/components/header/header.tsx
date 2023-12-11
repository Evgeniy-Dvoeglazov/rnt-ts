import Logo from "../logo/logo";
import "./header.css";
import SearchMovie from "../searchMovie/searchMovie";
import MovieInfo from "../movieInfo/movieInfo";
import Button from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedMovie,
  selectedMovieSelector,
} from "../../store/selectedMovie/selectedMovieStore";
import { logout } from "../../store/auth/authStore";

export default function Header() {
  const dispatch = useDispatch();
  const selectedMovie = useSelector(selectedMovieSelector);

  return (
    <header className="header">
      {selectedMovie ? (
        <>
          <div className="header__navigation">
            <Logo />
            <Button
              onClick={() => {
                dispatch(removeSelectedMovie());
              }}
              variant="withoutBackground"
              title="Back to search"
              type="button"
            />
          </div>
          <MovieInfo selectedMovie={selectedMovie} />
        </>
      ) : (
        <>
          <div className="header__navigation">
            <Logo />
            <Button
              onClick={() => {
                dispatch(logout());
                localStorage.removeItem("jwt");
              }}
              variant="textLink"
              title="Log Out"
              type="button"
            />
          </div>
          <SearchMovie />
        </>
      )}
    </header>
  );
}
