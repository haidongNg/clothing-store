import * as MemberService from '../../core/services/index';
import { Dispatch } from 'redux';
import jwtDecode from 'jwt-decode';
import { ActionTypeUser } from '../action-types/action.type';
import { MemberInfo } from '../../core/models/member-info.model';
import SetHeader from '../../shared/helpers/set-header';

// Type
interface FormLogin {
  email: string;
  password: string;
}

/**
 * Signin
 *
 * @param formSign
 * @param callback
 * @returns
 */
export const signin = (formSign: FormLogin, callback: () => void) => {
  return async (dispatch: Dispatch) => {
    const resp = await MemberService.login(formSign);
    if (resp && !resp.token) {
      return;
    }
    // Set header token
    SetHeader(resp.token);
    // set token
    localStorage.setItem('STORE', resp.token);
    const decode = jwtDecode(resp.token);
    dispatch({ type: ActionTypeUser.SET_CURRENT_MEMBER, payload: decode });
    callback();
  };
};

/**
 * Set decode token member
 *
 * @param data
 * @returns
 */
export const setCurrentMember = (data: MemberInfo) => {
  return {
    type: ActionTypeUser.SET_CURRENT_MEMBER,
    payload: data,
  };
};

/**
 * Logout
 *
 * @returns
 */
export const logout = () => {
  return (dispatch: Dispatch) => {
    localStorage.removeItem('STORE');
    dispatch({ type: ActionTypeUser.SET_CURRENT_MEMBER_EMPTY, payload: {} });
  };
};
