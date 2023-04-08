import React, { useState } from "react";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebas.utils";

const defaultFormFields = {
  email: "",
  password: "",
};
interface IProps {}
const SignInForm: React.FunctionComponent<IProps> = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user, {});
  };

  /**
   * Handle Sign in
   *
   * @param event
   * @returns
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const resp = await signInAuthUserWithEmailAndPassword(email, password);
      if (resp && resp.user) {
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
    <div className="sign-in-container">
      <h2>Don't have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            id: "in-email",
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
            id: "in-password",
            type: "password",
            required: true,
            name: "password",
            onChange: handleChange,
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button buttonOptions={{ type: "submit" }}>Sign In</Button>
          <Button
            buttonType="google"
            buttonOptions={{ type: "button", onClick: signInWithGoogle }}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
