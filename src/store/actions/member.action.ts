import * as MemberService from '../../core/services/index';
import { Dispatch } from 'redux';
interface FormLogin {
  email: string;
  password: string;
}
export const signin = (formSign: FormLogin, callback: () => void) => {
  return async (dispatch: Dispatch) => {
    const resp = await MemberService.login(formSign);
    // set token
    localStorage.setItem('STORE', resp.token);
    callback();
  };
};
