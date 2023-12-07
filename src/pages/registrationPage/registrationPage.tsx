import axios from "axios";
import { Field, Form, Formik } from "formik";

interface ValuesProps {
  [key: string]: string;
}

const validate = (values: ValuesProps) => {
  const errors: ValuesProps = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (!/^[A-Z0-9]*$/.test(values.username)) {
    errors.username = "Use only uppercase letters and numbers";
  }

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

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
};

export default function RegistrationPage() {
  return (
    <section>
      <h2>Sign up</h2>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          confirmPassword: "",
        }}
        onSubmit={async (values: ValuesProps) => {
          await axios
            .post(`http://localhost:3004/users`, values)
            .then((res) => res.data)
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
                Username
                <Field type="text" name="username" />
                {error("username")}
              </label>
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
              <label>
                Confirm Password
                <Field type="password" name="confirmPassword" />
                {error("confirmPassword")}
              </label>
              <button type="submit">Sign up</button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
