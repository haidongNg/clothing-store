import React, { useState } from "react";
import "./sign-up-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebas.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
interface IProps {}

const SignUpForm: React.FunctionComponent<IProps> = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  /**
   * Handle Sign in
   *
   * @param event
   * @returns
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const resp = await createAuthUserWithEmailAndPassword(email, password);
      if (resp && resp.user) {
        // save
        await createUserDocumentFromAuth(resp.user, {
          displayName: displayName,
        });
        // reset form
        resetFormFields();
      }
    } catch (error) {
      console.log("User creation encountered an error", error);
    }
  };

  /**
   * Handle change Input
   *
   * @param event
   */
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.currentTarget;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            id: 'displayName',
            type: "text",
            required: true,
            name: "displayName",
            onChange: handleChange,
            value: displayName,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            id: 'email',
            type: "email",
            required: true,
            name: "email",
            onChange: handleChange,
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            id: 'password',
            type: "password",
            required: true,
            name: "password",
            onChange: handleChange,
            value: password,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            id: 'confirmPassword',
            type: "password",
            required: true,
            name: "confirmPassword",
            onChange: handleChange,
            value: confirmPassword,
          }}
        />
        <Button  buttonOptions={{type: 'submit'}}>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
