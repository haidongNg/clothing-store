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
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 select-none font-medium" htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="example@email.com"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 outline-none focus:border-green-300" value={formSignin.email}
              onChange={(e) => handleOnChange(e)} />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 select-none font-medium" htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="********" value={formSignin.password}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 outline-none focus:border-green-300"
              onChange={(e) => handleOnChange(e)} />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="w-full px-6 my-5">
              <button className="w-full mx-auto block max-w-xs uppercase px-3 py-3 rounded-lg bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white font-semibold" type="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const conector = connect(null, { signin });
export default conector(Signin);
