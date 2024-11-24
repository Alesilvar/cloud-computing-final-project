import axios from 'axios';

// API para usuarios
const userApi = axios.create({
  baseURL: 'https://ot0i7774d1.execute-api.us-east-1.amazonaws.com/dev',
});

// API para cuentas
const accountApi = axios.create({
  baseURL: 'https://buey4muco2.execute-api.us-east-1.amazonaws.com/dev',
});

// API para tarjetas
const cardApi = axios.create({
  baseURL: 'https://wg2jlya60g.execute-api.us-east-1.amazonaws.com/dev',
});

// API para transaccion
const transactionApi = axios.create({
  baseURL: 'https://lpv8wsrqed.execute-api.us-east-1.amazonaws.com/dev',
});

// API para soportes
const supportApi = axios.create({
  baseURL: 'https://on7ysj1462.execute-api.us-east-1.amazonaws.com/dev',
});

// API para pagos
const paymentApi = axios.create({
  baseURL: 'https://9e2emvggyi.execute-api.us-east-1.amazonaws.com/dev',
});


export { supportApi, userApi, accountApi, cardApi, transactionApi, paymentApi };

