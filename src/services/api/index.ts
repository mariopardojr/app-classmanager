import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-classmanager.herokuapp.com/',
  timeout: 5000,
  headers: { accept: 'application/json' },
});
