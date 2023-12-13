import "./authorizationPage.css";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/authStore";
import Button from "../../components/button/button";
import { loadingSelector, setLoading } from "../../store/loading/loadingStore";
import {
  serverErrorSelector,
  setServerError,
} from "../../store/serverError/serverErrorStore";
import FormField from "../../components/formField/formField";
import { authorize, AuthorizeValues } from "./authorize";
import { authorizationValidate } from "./authorizationValidate";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pages } from "../../app/app";

export default function AuthorizationPage() {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const serverError = useSelector(serverErrorSelector);
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(login());
      navigate(Pages.SearchMovie, { replace: true });
    }
  }, []);

  return (
    <section className="authorizationPage">
      <h2 className="authorizationPage__title">Sign in</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values: AuthorizeValues) => {
          dispatch(setLoading(true));
          dispatch(setServerError(""));
          await authorize(values)
            .then((res) => {
              localStorage.setItem("jwt", res.data.accessToken);
              dispatch(login());
              navigate(Pages.SearchMovie, { replace: true });
            })
            .catch((error) => {
              dispatch(
                setServerError(
                  error.response.data.length !== 0
                    ? error.response.data
                    : "Something went wrong",
                ),
              );
            })
            .finally(() => dispatch(setLoading(false)));
        }}
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
        <Link to={Pages.Registration} className="authorizationPage__link">
          Sign up
        </Link>
      </span>
    </section>
  );
}
