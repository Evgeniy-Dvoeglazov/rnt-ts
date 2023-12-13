import "./app.css";
import SearchMoviePage from "../pages/searchMoviePage/searchMoviePage";
import AuthorizationPage from "../pages/authorizationPage/authorizationPage";
import RegistrationPage from "../pages/registrationPage/registrationPage";
import { useSelector } from "react-redux";
import { authSelector } from "../store/auth/authStore";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/notFoundPage/notFoundPage";
import { selectedMovieSelector } from "../store/selectedMovie/selectedMovieStore";
import MovieInfoPage from "../pages/movieInfoPage/movieInfoPage";

export enum Pages {
  SearchMovie = "/",
  Authorization = "/signin",
  Registration = "/signup",
  MovieInfo = "/movie-info",
  NotFound = "*",
}

export function App() {
  const loggedIn = useSelector(authSelector);
  const selectedMovie = useSelector(selectedMovieSelector);

  return (
    <div className="app">
      <Routes>
        <Route
          path={Pages.SearchMovie}
          element={
            loggedIn ? (
              <SearchMoviePage />
            ) : (
              <Navigate to={Pages.Authorization} />
            )
          }
        />
        <Route
          path={Pages.MovieInfo}
          element={
            loggedIn && selectedMovie ? (
              <MovieInfoPage selectedMovie={selectedMovie} />
            ) : (
              <Navigate to={Pages.Authorization} />
            )
          }
        />
        <Route path={Pages.Authorization} element={<AuthorizationPage />} />
        <Route path={Pages.Registration} element={<RegistrationPage />} />
        <Route path={Pages.NotFound} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
