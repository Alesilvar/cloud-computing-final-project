import axios from 'axios';

// API para usuarios
const userApi = axios.create({
  baseURL: 'https://ot0i7774d1.execute-api.us-east-1.amazonaws.com/dev',
});

// API para cuentas
const accountApi = axios.create({
  baseURL: 'https://buey4muco2.execute-api.us-east-1.amazonaws.com/dev',
});

// API para transacciones
const transactionApi = axios.create({
  baseURL: 'https://lpv8wsrqed.execute-api.us-east-1.amazonaws.com/dev',
});

// API para soporte
const supportApi = axios.create({
  baseURL: 'https://on7ysj1462.execute-api.us-east-1.amazonaws.com/dev',
});

// API para pagos
const paymentApi = axios.create({
  baseURL: 'https://9e2emvggyi.execute-api.us-east-1.amazonaws.com/dev',
});

// API para solicitudes de préstamos
const solicitudPrestamoApi = axios.create({
  baseURL: 'https://bka3b9061j.execute-api.us-east-1.amazonaws.com/dev',
});

// API para tarjetas
const tarjetaApi = axios.create({
  baseURL: 'https://wg2jlya60g.execute-api.us-east-1.amazonaws.com/dev',
});

// Exportar todas las APIs
export {
  userApi,
  accountApi,
  transactionApi,
  supportApi,
  paymentApi,
  solicitudPrestamoApi,
  tarjetaApi,
};