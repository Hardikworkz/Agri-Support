// src/api/axios.js
const axios = require('axios');

const API = axios.create({
  baseURL: 'http://localhost:3000/api/users',
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
