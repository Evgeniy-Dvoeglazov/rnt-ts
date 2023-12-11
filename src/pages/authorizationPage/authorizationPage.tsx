import "./authorizationPage.css";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/authStore";
import { togglePage } from "../../store/page/pageStore";
import Button from "../../components/button/button";
import { loadingSelector, setLoading } from "../../store/loading/loadingStore";
import {
  serverErrorSelector,
  setServerError,
} from "../../store/serverError/serverErrorStore";
import FormField from "../../components/formField/formField";
import { authorize, AuthorizeValues } from "./authorize";

const formFieldvalidate = (values: AuthorizeValues) => {
  const errors: AuthorizeValues = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/.+@.+\..+/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 9) {
    errors.password = "The password must contain more than 8 symbols";
  } else if (
    values.password.length !==
    Array.from(new Set(values.password)).join("").length
  ) {
    errors.password = "The password must not contain duplicate symbols";
  }

  return errors;
};

export default function AuthorizationPage() {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const serverError = useSelector(serverErrorSelector);

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
        validate={formFieldvalidate}
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
          onClick={() => dispatch(togglePage())}
          title="Sign up"
          variant="textLink"
          type="button"
        />
      </span>
    </section>
  );
}
