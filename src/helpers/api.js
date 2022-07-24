import axios from 'axios';

export const URL = '/task';

export const http = {
  OK: 200,
  CREATED: 201,
};

const api = axios.create({
  baseURL: `http://localhost:${process.env.API_PORT || '3000'}`,
  timeout: 1000,
});

export default api;
