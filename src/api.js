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


const transactionApi = axios.create({
  baseURL: 'https://lpv8wsrqed.execute-api.us-east-1.amazonaws.com/dev',
});

const cardApi = axios.create({
  baseURL: 'https://wg2jlya60g.execute-api.us-east-1.amazonaws.com/dev',
});

const supportApi = axios.create({
  baseURL: 'https://on7ysj1462.execute-api.us-east-1.amazonaws.com/dev', // Base URL del microservicio
});
const paymentApi = axios.create({
  baseURL: 'https://9e2emvggyi.execute-api.us-east-1.amazonaws.com/dev', // URL correcta del endpoint de pagos
});


export { supportApi, userApi, accountApi, cardApi, transactionApi, paymentApi };

