import Logo from "../logo/logo";
import "./header.css";
import SearchMovie from "../searchMovie/searchMovie";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/authStore";
import { AppDispatch } from "../../app/appStore";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <header className="header" data-testid="header">
      <div className="header__navigation">
        <Logo />
        <Button
          onClick={() => {
            dispatch(logout());
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
