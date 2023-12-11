import "./app.css";
import SearchMoviePage from "../pages/searchMoviePage/searchMoviePage";
import AuthorizationPage from "../pages/authorizationPage/authorizationPage";
import RegistrationPage from "../pages/registrationPage/registrationPage";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, login } from "../store/auth/authStore";
import { useEffect } from "react";
import { pageSelector, Page } from "../store/page/pageStore";

export function App() {
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  const togglePage = useSelector(pageSelector);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(login());
    }
  }, []);

  return (
    <div className="app">
      {auth ? (
        <SearchMoviePage />
      ) : (
        <>
          {togglePage === Page.Authorization ? (
            <AuthorizationPage />
          ) : (
            <RegistrationPage />
          )}
        </>
      )}
    </div>
  );
}
