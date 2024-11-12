import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Inicio from './Inicio.jsx'; // Importa Inicio en lugar de App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicio /> {/* Renderiza Inicio en lugar de App */}
  </StrictMode>
);
