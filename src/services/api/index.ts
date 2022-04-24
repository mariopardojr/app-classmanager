import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.15.10:3000/',
  timeout: 5000,
  headers: { accept: 'application/json' },
});
