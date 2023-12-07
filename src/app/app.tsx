import "./app.css";
import SearchMoviePage from "../pages/searchMoviePage/searchMoviePage";
import AuthorizationPage from "../pages/authorizationPage/authorizationPage";
import RegistrationPage from "../pages/registrationPage/registrationPage";
import { useSelector } from "react-redux";
import { authSelector } from "../store/auth/authStore";

export function App() {
  const auth = useSelector(authSelector);

  return (
    <div className="app">
      {auth ? (
        <SearchMoviePage />
      ) : (
        <>
          <RegistrationPage />
          <AuthorizationPage />
        </>
      )}
    </div>
  );
}
