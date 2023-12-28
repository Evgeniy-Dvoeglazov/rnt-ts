import "./app.css";
import SearchMoviePage from "../pages/searchMoviePage/searchMoviePage";
import AuthorizationPage from "../pages/authorizationPage/authorizationPage";
import RegistrationPage from "../pages/registrationPage/registrationPage";
import { Route, Routes } from "react-router-dom";
import MovieInfoPage from "../pages/movieInfoPage/movieInfoPage";
import NotFoundPage from "../pages/notFoundPage/notFoundPage";
import ProtectedRouteElement from "../protectedRouteElement/protectedRouteElement";
import { useLogin } from "../utils/hooks/useLogin";

export enum Pages {
  SearchMovie = "/",
  Authorization = "/signin",
  Registration = "/signup",
  MovieInfo = "/movie-info/:movieId",
  NotFound = "*",
}

export function App() {
  const loggedIn = useLogin();

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
