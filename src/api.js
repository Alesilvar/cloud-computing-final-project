import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ot0i7774d1.execute-api.us-east-1.amazonaws.com/dev', // URL base de tu API
});

export default api;
