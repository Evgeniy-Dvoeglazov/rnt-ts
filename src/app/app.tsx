import "./app.css";
import SearchMoviePage from "../pages/searchMoviePage/searchMoviePage";
import AuthorizationPage from "../pages/authorizationPage/authorizationPage";
import RegistrationPage from "../pages/registrationPage/registrationPage";
import { useSelector } from "react-redux";
import { authSelector } from "../store/auth/authStore";
import { pageSelector, Page } from "../store/page/pageStore";

export function App() {
  const loggedIn = useSelector(authSelector);
  const currentPage = useSelector(pageSelector);

  return (
    <div className="app">
      {loggedIn ? (
        <SearchMoviePage />
      ) : (
        <>
          {currentPage === Page.Authorization ? (
            <AuthorizationPage />
          ) : (
            <RegistrationPage />
          )}
        </>
      )}
    </div>
  );
}
