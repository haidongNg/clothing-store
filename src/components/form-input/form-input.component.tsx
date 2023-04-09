import React, { InputHTMLAttributes } from "react";
import { Group, FormInputLabel, Input } from "./form-input.styles";

interface IProps {
  label: string;
  inputOptions: InputHTMLAttributes<HTMLInputElement>;
}

const FormInput: React.FunctionComponent<IProps> = ({
  label,
  inputOptions,
}) => {
  return (
    <Group className="group">
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel shrink={inputOptions.value?.toString.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
