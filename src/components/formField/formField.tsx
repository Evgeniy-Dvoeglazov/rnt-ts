import "./formField.css";
import { Field } from "formik";
import { ComponentPropsWithoutRef } from "react";

interface FormFieldProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  error: false | "" | JSX.Element | undefined;
}

export default function FormField(props: FormFieldProps) {
  const fieldName = props.name[0].toUpperCase() + props.name.slice(1);
  return (
    <label className="formField__label">
      {fieldName}
      <Field {...props} className="formField__input" />
      {props.error}
    </label>
  );
}
