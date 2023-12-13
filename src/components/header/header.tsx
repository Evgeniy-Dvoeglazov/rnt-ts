import Logo from "../logo/logo";
import "./header.css";
import SearchMovie from "../searchMovie/searchMovie";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/authStore";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header__navigation">
        <Logo />
        <Button
          onClick={() => {
            dispatch(logout());
            localStorage.removeItem("jwt");
          }}
          variant="withoutBackground"
          title="Log Out"
          type="button"
        />
      </div>
      <SearchMovie />
    </header>
  );
}
