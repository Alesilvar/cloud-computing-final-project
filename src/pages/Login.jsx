// src/pages/LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Bienvenido a BEK</h1>
      <LoginForm />
      <p style={styles.registerPrompt}>
        ¿No tienes una cuenta? <Link to="/register" style={styles.link}>Regístrate aquí</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    padding: '20px'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px'
  },
  registerPrompt: {
    marginTop: '20px',
    fontSize: '16px'
  },
  link: {
    color: '#007bff',
    textDecoration: 'none'
  }
};

export default LoginPage;
