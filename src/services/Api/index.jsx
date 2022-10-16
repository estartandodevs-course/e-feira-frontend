import axios from 'axios';

export const ApiServer = axios.create({
  baseURL: 'https://private-ea557-efeira1.apiary-mock.com', // baseURL inicial
  timeout: 15000,
});
