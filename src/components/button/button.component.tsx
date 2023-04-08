import "./button.styles.scss";
import React, { ButtonHTMLAttributes } from "react";

/*
Default

inverted

Google sign in
 */

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
interface IProps {
  children?: React.ReactNode;
  buttonOptions?: ButtonHTMLAttributes<HTMLButtonElement>;
  buttonType?: string;
}

const Button: React.FunctionComponent<IProps> = ({
  children,
  buttonType,
  buttonOptions,
}) => {
  return (
    <button
      className={`button-container ${
        Object.getOwnPropertyDescriptor(BUTTON_TYPE_CLASSES, buttonType ?? "")
          ?.value ?? ""
      }`}
      {...buttonOptions}
    >
      {children}
    </button>
  );
};

export default Button;
