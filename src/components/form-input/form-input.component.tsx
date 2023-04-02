import React, { InputHTMLAttributes } from "react";
import "./form-input.styles.scss";

interface IProps {
  label: string;
  inputOptions: InputHTMLAttributes<HTMLInputElement>
}

const FormInput: React.FunctionComponent<IProps> = ({
  label,
  inputOptions
}) => {
  return (
    <div className="group">
      {label && (
        <label
            htmlFor={inputOptions?.id}
          className={`${inputOptions.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
      <input className="form-input" {...inputOptions} />
    </div>
  );
};

export default FormInput;
