// src/components/ProtectedRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenValid } from '../authService';

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      const valid = await isTokenValid();
      setIsAuthenticated(valid);
    };
    validateToken();
  }, []);

  if (isAuthenticated === null) {
    return <p>Cargando...</p>; // Mensaje de carga mientras se valida
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;