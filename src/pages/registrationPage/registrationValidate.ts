import { AuthValues } from "../../store/auth/authStore";
import { authorizationValidate } from "../authorizationPage/authorizationValidate";

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
