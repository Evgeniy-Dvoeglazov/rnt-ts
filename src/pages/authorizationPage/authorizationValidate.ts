import { AuthorizeValues } from "./authorize";

export const authorizationValidate = (values: AuthorizeValues) => {
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
