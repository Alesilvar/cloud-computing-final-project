// src/api.js
import axios from 'axios';

// API para usuarios
const userApi = axios.create({
  baseURL: 'https://ot0i7774d1.execute-api.us-east-1.amazonaws.com/dev' // Asegúrate de que coincida exactamente
});

export { userApi };