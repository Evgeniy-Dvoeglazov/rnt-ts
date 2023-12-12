import { RegisterValues } from "./register";

export const registrationValidate = (values: RegisterValues) => {
  const errors: RegisterValues = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (!/^[A-Z0-9]*$/.test(values.username)) {
    errors.username = "Use only uppercase letters and numbers";
  }

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

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
};
