import "./button.css";
import classNames from "classnames";
import type { ComponentPropsWithoutRef } from "react";

interface buttonProps extends ComponentPropsWithoutRef<"button"> {
  variant: "withBackground" | "withoutBackground" | "textLink";
  title: string;
}

export default function Button(props: buttonProps) {
  const buttonClasses = classNames(
    "button",
    `button_${props.variant}`,
    props.className,
  );

  return (
    <button {...props} className={buttonClasses}>
      {props.title}
    </button>
  );
}
