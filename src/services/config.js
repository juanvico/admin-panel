import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

export const base_url = 'http://192.168.1.13:5000';
//export const base_url = API_URL; 


export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Token ${token}`;
};

export default axios.create({
  baseURL: base_url,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
