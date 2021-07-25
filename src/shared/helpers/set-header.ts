import Axios from 'axios';

const SetHeader = (token: string) => {
  if (token) {
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete Axios.defaults.headers.common['Authorization'];
  }
};

export default SetHeader;
