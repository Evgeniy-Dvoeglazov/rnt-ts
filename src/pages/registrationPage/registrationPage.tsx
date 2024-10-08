import "./registrationPage.css";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/button";
import FormField from "../../components/formField/formField";
import {
  authSelector,
  registration,
  removeServerError,
} from "../../store/auth/authStore";
import { AppDispatch } from "../../app/appStore";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../app/app";
import { registrationValidate } from "../../utils/constants/validate";

export default function RegistrationPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { serverError, loading, successRegister } = useSelector(authSelector);

  return (
    <section className="registrationPage" data-testid="registrationPage">
      <h2 className="registrationPage__title">Sign up</h2>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => dispatch(registration(values))}
        validate={registrationValidate}
      >
        {({ errors, touched }) => {
          const error = (name: string) =>
            touched[name] &&
            errors[name] && (
              <p
                className="registrationPage__validationError"
                data-testid="validationError"
              >
                {errors[name]}
              </p>
            );

          return (
            <Form className="registrationPage__form">
              <FormField
                name="username"
                type="text"
                error={error("username")}
                data-testid="usernameInput"
              />
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
              <FormField
                name="confirmPassword"
                type="password"
                error={error("confirmPassword")}
                data-testid="passwordConfirmInput"
              />
              {successRegister && (
                <p className="registrationPage__successMessage">
                  Registration was successful
                </p>
              )}
              {serverError && (
                <p className="registrationPage__serverError">{serverError}</p>
              )}
              <Button
                title={loading ? "Loading..." : "Sign up"}
                variant="withoutBackground"
                type="submit"
                className="button__center"
                disabled={loading}
                data-testid="signUpSubmitBtn"
              />
            </Form>
          );
        }}
      </Formik>
      <span className="registrationPage__question">
        Registered?
        <Button
          onClick={() => {
            dispatch(removeServerError());
            navigate(Pages.Authorization, { replace: true });
          }}
          title="Sign in"
          variant="textLink"
          type="button"
          data-testid="signInNavigateButton"
        />
      </span>
    </section>
  );
}
