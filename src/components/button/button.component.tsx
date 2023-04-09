import { BaseButton, GoogleSignButton, InvertedButton } from "./button.styles";
import React, { ButtonHTMLAttributes } from "react";

/*
Default

inverted

Google sign in
 */

const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
const getBtton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

// Type
interface IProps {
  children?: React.ReactNode;
  buttonOptions?: ButtonHTMLAttributes<HTMLButtonElement>;
  buttonType?: string;
}

// Component
const Button: React.FunctionComponent<IProps> = ({
  children,
  buttonType,
  buttonOptions,
}) => {
  const CustomButton = getBtton(buttonType);
  return <CustomButton {...buttonOptions}>{children}</CustomButton>;
};

export default Button;
