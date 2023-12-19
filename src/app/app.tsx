import "./app.css";
import SearchMoviePage from "../pages/searchMoviePage/searchMoviePage";
import AuthorizationPage from "../pages/authorizationPage/authorizationPage";
import RegistrationPage from "../pages/registrationPage/registrationPage";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, login } from "../store/auth/authStore";
import { Route, Routes, useNavigate } from "react-router-dom";
import MovieInfoPage from "../pages/movieInfoPage/movieInfoPage";
import NotFoundPage from "../pages/notFoundPage/notFoundPage";
import ProtectedRouteElement from "../protectedRouteElement/protectedRouteElement";
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
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loggedIn, token } = useSelector(authSelector);

  useEffect(() => {
    token && dispatch(login());
  }, [dispatch, navigate, token]);

  return (
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
        <Route
          path={Pages.MovieInfo}
          element={
            <ProtectedRouteElement
              element={MovieInfoPage}
              loggedIn={loggedIn}
            />
          }
        />
        <Route path={Pages.Authorization} element={<AuthorizationPage />} />
        <Route path={Pages.Registration} element={<RegistrationPage />} />
        <Route path={Pages.NotFound} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
