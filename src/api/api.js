import axios from 'axios';

const API = axios.create({
  baseURL: 'https://senteeback.onrender.com/api',
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add Bearer token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;

