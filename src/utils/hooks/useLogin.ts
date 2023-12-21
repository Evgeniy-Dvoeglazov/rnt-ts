import { useEffect } from "react";
import { authToken } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/appStore";
import { authSelector, login } from "../../store/auth/authStore";

export function useLogin() {
  const dispatch = useDispatch<AppDispatch>();
  const { loggedIn } = useSelector(authSelector);
  const token = sessionStorage.getItem(authToken);

  useEffect(() => {
    token && dispatch(login());
  }, [dispatch, token]);

  return loggedIn;
}
