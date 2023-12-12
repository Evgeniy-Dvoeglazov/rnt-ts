import "./registrationPage.css";
import { Form, Formik } from "formik";
import { togglePage } from "../../store/page/pageStore";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/button";
import { loadingSelector, setLoading } from "../../store/loading/loadingStore";
import {
  serverErrorSelector,
  setServerError,
} from "../../store/serverError/serverErrorStore";
import {
  isSuccessRegister,
  successRegisterSelector,
} from "../../store/successRegister/successRegisterStore";
import FormField from "../../components/formField/formField";
import { register, RegisterValues } from "./register";
import { registrationValidate } from "./registrationValidate";

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const serverError = useSelector(serverErrorSelector);
  const successRegister = useSelector(successRegisterSelector);

  return (
    <section className="registrationPage">
      <h2 className="registrationPage__title">Sign up</h2>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          confirmPassword: "",
        }}
        onSubmit={async (values: RegisterValues) => {
          dispatch(setLoading(true));
          dispatch(setServerError(""));
          dispatch(isSuccessRegister(false));
          await register(values)
            .then((res) => {
              dispatch(isSuccessRegister(true));
              res.data;
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
        validate={registrationValidate}
      >
        {({ errors, touched }) => {
          const error = (name: string) =>
            touched[name] &&
            errors[name] && (
              <p className="registrationPage__validationError">
                {errors[name]}
              </p>
            );

          return (
            <Form className="registrationPage__form">
              <FormField
                name="username"
                type="text"
                error={error("username")}
              />
              <FormField name="email" type="email" error={error("email")} />
              <FormField
                name="password"
                type="password"
                error={error("password")}
              />
              <FormField
                name="confirmPassword"
                type="password"
                error={error("confirmPassword")}
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
              />
            </Form>
          );
        }}
      </Formik>
      <span className="registrationPage__question">
        Registered?
        <Button
          onClick={() => dispatch(togglePage())}
          title="Sign in"
          variant="textLink"
          type="button"
        />
      </span>
    </section>
  );
}
