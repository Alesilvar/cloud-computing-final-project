// src/authService.js
import { userApi, tokenApi } from './api';


// Función para obtener los datos del usuario
export const getUserData = async (usuario_id) => {
  try {
    const response = await userApi.post('/usuarios/buscar', { usuario_id });
    return response.data.body; // Asegúrate de que `nombre` esté en esta respuesta
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
    throw error;
  }
};
// Función para validar el token
export const isTokenValid = async () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const response = await tokenApi.post('/tokens/validar', { token });
    return response.status === 200;
  } catch (error) {
    console.error('Error al validar el token:', error);
    return false;
  }
};