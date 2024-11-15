// src/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.loginContainer}>
        <LoginForm />
        <button onClick={goToHome} style={styles.homeButton}>Ir al Inicio</button>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5', // Fondo claro
    fontFamily: 'Arial, sans-serif',
  },
  loginContainer: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  homeButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#D32F2F', // Rojo primario
    color: '#FFFFFF',
    fontSize: '1em',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  homeButtonHover: {
    backgroundColor: '#b71c1c', // Rojo oscuro
  },
};

export default Login;