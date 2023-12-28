import { AuthValues } from "../../store/auth/authStore";

export const authorizationValidate = (values: AuthValues) => {
  const errors: AuthValues = {};

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

export const registrationValidate = (values: AuthValues) => {
  const errors: AuthValues = {};
  const authorizationErrors = authorizationValidate(values);

  if (authorizationErrors.email) {
    errors.email = authorizationErrors.email;
  }

  if (authorizationErrors.password) {
    errors.password = authorizationErrors.password;
  }

  if (!values.username) {
    errors.username = "Required";
  } else if (!/^[A-Z0-9]*$/.test(values.username)) {
    errors.username = "Use only uppercase letters and numbers";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
};
