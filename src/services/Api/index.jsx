import axios from 'axios';

export const ApiServer = axios.create({
  baseURL: 'https://e-feira-backend.onrender.com/api', // baseURL inicial
  timeout: 15000,
});
