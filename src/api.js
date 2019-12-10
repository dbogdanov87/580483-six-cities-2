import axios from 'axios';


export const api = axios.create({
  baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
  timeout: 1000 * 5,
  withCredentials: true,
});
