import "./authorizationPage.css";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  authSelector,
  authorization,
  login,
  removeServerError,
} from "../../store/auth/authStore";
import Button from "../../components/button/button";
import FormField from "../../components/formField/formField";
import { authorizationValidate } from "./authorizationValidate";
import { useEffect } from "react";
import { AppDispatch } from "../../app/appStore";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../app/app";

export default function AuthorizationPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loggedIn, serverError, loading } = useSelector(authSelector);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(login());
      navigate(Pages.SearchMovie, { replace: true });
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    loggedIn && navigate(Pages.SearchMovie, { replace: true });
  }, [loggedIn, navigate]);

  return (
    <section className="authorizationPage">
      <h2 className="authorizationPage__title">Sign in</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => dispatch(authorization(values))}
        validate={authorizationValidate}
      >
        {({ errors, touched }) => {
          const error = (name: string) =>
            touched[name] &&
            errors[name] && (
              <p className="authorizationPage__error">{errors[name]}</p>
            );
          return (
            <Form className="authorizationPage__form">
              <FormField name="email" type="email" error={error("email")} />
              <FormField
                name="password"
                type="password"
                error={error("password")}
              />
              {serverError && (
                <p className="authorizationPage__serverError">{serverError}</p>
              )}
              <Button
                title={loading ? "Loading..." : "Sign in"}
                variant="withoutBackground"
                type="submit"
                className="button__center"
                disabled={loading}
              />
            </Form>
          );
        }}
      </Formik>
      <span className="authorizationPage__question">
        Not registered?
        <Button
          onClick={() => {
            dispatch(removeServerError());
            navigate(Pages.Registration, { replace: true });
          }}
          title="Sign up"
          variant="textLink"
          type="button"
        />
      </span>
    </section>
  );
}
