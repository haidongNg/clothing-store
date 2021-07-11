import Axios from 'axios';
import { environment as env } from '../environments/environment.prod';

const apiUrl = `${env.apiURL}/members/login`;

interface FormLogin {
  email: string;
  password: string;
}
export const login = async (form: FormLogin): Promise<{token: string}> => {
  return (await Axios.post(apiUrl, form)).data;
};
