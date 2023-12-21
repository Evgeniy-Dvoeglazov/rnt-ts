import "./app.css";
import SearchMoviePage from "../pages/searchMoviePage/searchMoviePage";
import AuthorizationPage from "../pages/authorizationPage/authorizationPage";
import RegistrationPage from "../pages/registrationPage/registrationPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import MovieInfoPage from "../pages/movieInfoPage/movieInfoPage";
import NotFoundPage from "../pages/notFoundPage/notFoundPage";
import ProtectedRouteElement from "../protectedRouteElement/protectedRouteElement";
import { useLogin } from "../utils/hooks/useLogin";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedMovie,
  selectedMovieSelector,
} from "../store/selectedMovie/selectedMovieStore";
import { useEffect } from "react";
import { AppDispatch } from "./appStore";

export enum Pages {
  SearchMovie = "/",
  Authorization = "/signin",
  Registration = "/signup",
  MovieInfo = "/movie-info",
  NotFound = "*",
}

export function App() {
  const loggedIn = useLogin();
  const { movie, loading, error } = useSelector(selectedMovieSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const movieId = Number(location.pathname.match(/\d+/g));
    if (movieId) {
      const selectedMovieParams = {
        id: movieId,
      };
      dispatch(getSelectedMovie(selectedMovieParams));
    }
  }, [dispatch, navigate]);

  return (
    <>
      {error && <h2 className="app__title">Error: {error}</h2>}
      {!loading && !error && (
        <div className="app">
          <Routes>
            <Route
              path={Pages.SearchMovie}
              element={
                <ProtectedRouteElement
                  element={SearchMoviePage}
                  loggedIn={loggedIn}
                />
              }
            />
            {movie && (
              <Route
                path={`${Pages.MovieInfo}-${movie.id}`}
                element={
                  <ProtectedRouteElement
                    element={MovieInfoPage}
                    loggedIn={loggedIn}
                  />
                }
              />
            )}
            <Route path={Pages.Authorization} element={<AuthorizationPage />} />
            <Route path={Pages.Registration} element={<RegistrationPage />} />
            <Route path={Pages.NotFound} element={<NotFoundPage />} />
          </Routes>
        </div>
      )}
    </>
  );
}
