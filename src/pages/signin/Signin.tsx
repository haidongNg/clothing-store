import { FC, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { History } from 'history';
import { signin } from '../../store/actions/index';
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
    <div className="flex items-center h-auto w-full bg-teal-lighter my-8">
      <div className="w-full max-w-sm bg-white rounded shadow-lg p-8 mx-auto">
        <h1 className="block w-full uppercase text-center font-bold text-3xl text-grey-darkest mb-6">Sign Up</h1>
        <form className="mb-4" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg" htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="example@email.com" className="form-input py-2 px-3 rounded-xl" value={formSignin.email}
              onChange={(e) => handleOnChange(e)} />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg" htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="********" value={formSignin.password} className="form-input py-2 px-3 rounded-xl"
              onChange={(e) => handleOnChange(e)} />
          </div>

          <button className="block uppercase mx-auto p-4 rounded" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

const conector = connect(null, { signin });
export default conector(Signin);
