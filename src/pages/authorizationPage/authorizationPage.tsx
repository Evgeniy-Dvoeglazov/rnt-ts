import "./authorizationPage.css";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  authSelector,
  authorization,
  removeServerError,
} from "../../store/auth/authStore";
import Button from "../../components/button/button";
import FormField from "../../components/formField/formField";
import { useEffect } from "react";
import { AppDispatch } from "../../app/appStore";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../app/app";
import { authorizationValidate } from "../../utils/constants/validate";

export default function AuthorizationPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loggedIn, serverError, loading } = useSelector(authSelector);

  useEffect(() => {
    loggedIn && navigate(Pages.SearchMovie, { replace: true });
  }, [loggedIn, navigate]);

  return (
    <section className="authorizationPage" data-testid="authorizationPage">
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
              <p
                className="authorizationPage__error"
                data-testid="validationError"
              >
                {errors[name]}
              </p>
            );
          return (
            <Form className="authorizationPage__form">
              <FormField
                name="email"
                type="email"
                error={error("email")}
                data-testid="emailInput"
              />
              <FormField
                name="password"
                type="password"
                error={error("password")}
                data-testid="passwordInput"
              />
              {serverError && (
                <p
                  className="authorizationPage__serverError"
                  data-testid="serverError"
                >
                  {serverError}
                </p>
              )}
              <Button
                title={loading ? "Loading..." : "Sign in"}
                variant="withoutBackground"
                type="submit"
                className="button__center"
                disabled={loading}
                data-testid="signInSubmitBtn"
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
          data-testid="signUpNavigateButton"
        />
      </span>
    </section>
  );
}
