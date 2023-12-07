import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/appStore";
import { login } from "../../store/auth/authStore";
import { useEffect } from "react";

interface ValuesProps {
  [key: string]: string;
}

const validate = (values: ValuesProps) => {
  const errors: ValuesProps = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
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
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(login());
    }
  }, []);

  return (
    <section>
      <h2>Sign in</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values: ValuesProps) => {
          await axios
            .post(`http://localhost:3004/signin`, values)
            .then((res) => {
              localStorage.setItem("jwt", res.data.accessToken);
              dispatch(login());
            })
            .catch((error) => console.log(error.response.data));
        }}
        validate={validate}
      >
        {({ errors, touched }) => {
          const error = (name: string) =>
            touched[name] && errors[name] && <div>{errors[name]}</div>;
          return (
            <Form>
              <label>
                Email
                <Field type="email" name="email" />
                {error("email")}
              </label>
              <label>
                Password
                <Field type="password" name="password" />
                {error("password")}
              </label>
              <button type="submit">Sign in</button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
