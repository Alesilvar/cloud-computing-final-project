import React from 'react';
import { useNavigate } from 'react-router-dom';

const Proximamente = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.message}>Estamos en desarrollo</h1>
      <button style={styles.button} onClick={handleGoHome}>Ir al Inicio</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5', // color de fondo claro
  },
  message: {
    fontSize: '3em',
    color: '#333333', // texto oscuro
    textAlign: 'center',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#FFFFFF', // texto blanco
    backgroundColor: '#D32F2F', // rojo primario
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#b71c1c', // rojo oscuro para el hover
  },
};

export default Proximamente;