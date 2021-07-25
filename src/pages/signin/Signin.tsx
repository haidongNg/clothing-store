import { FC, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { History } from 'history';
import { signin } from '../../store/actions/index';
import {
  InputSign,
  ButtonSign,
  SignContainer,
  SignChild,
} from './Signin.style';
import {
  CheckboxControl,
  InputCheckbox,
  CustomCheckbox,
  FormGroup,
  Label,
} from '../../core/styles/base.style';
// Type
interface FormSignin {
  email: string;
  password: string;
}

type SigninProps = {
  signin: (form: FormSignin, callback: () => void) => void;
  history: History;
};

const Signin: FC<SigninProps> = (props) => {
  const [formSignin, setFormSign] = useState<FormSignin>({
    email: '',
    password: '',
  });

  /**
   * Change Input
   *
   * @param e Element
   */
  const handleOnChange = (e: FormEvent<HTMLInputElement>): void => {
    setFormSign({
      ...formSignin,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  /**
   * Signin
   *
   * @param e Form
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      props.signin(formSignin, () => {
        // Redirect
        props.history.push('/');
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignContainer>
      <SignChild>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label>Email</Label>
            <InputSign
              type="text"
              name="email"
              placeholder="example@email.com"
              value={formSignin.email}
              onChange={(e) => handleOnChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <InputSign
              type="password"
              name="password"
              placeholder="********"
              value={formSignin.password}
              onChange={(e) => handleOnChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <CheckboxControl>
              ABC
              <InputCheckbox type="checkbox" />
              <CustomCheckbox />
            </CheckboxControl>
          </FormGroup>
          <ButtonSign type="submit">Sign in</ButtonSign>
        </form>
      </SignChild>
    </SignContainer>
  );
};

const conector = connect(null, { signin });
export default conector(Signin);
