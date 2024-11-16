import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importamos useNavigate
import api from '../api';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar el formulario
  const navigate = useNavigate(); // Hook para la navegación

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/usuarios/login', formData);
      console.log('Usuario autenticado:', response.data);
      alert('Inicio de sesión exitoso');
      setIsLoggedIn(true);
      navigate('/cuenta'); // Redirigimos a la página de Cuenta.jsx
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Hubo un error al iniciar sesión');
    }
  };

  return (
    <div style={styles.container}>
      {!isLoggedIn ? (
        <>
          <h2 style={styles.heading}>Inicia sesión en BEK</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Correo Electrónico:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                style={styles.input}
                required
              />
            </label>
            <label style={styles.label}>
              Contraseña:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                style={styles.input}
                required
              />
            </label>
            <button type="submit" style={styles.button}>
              Iniciar Sesión
            </button>
          </form>
          <p style={styles.registerText}>
            ¿No tienes una cuenta?{' '}
            <Link to="/cuenta" style={styles.registerLink}>
              Abre una cuenta digital
            </Link>
          </p>
        </>
      ) : (
        <div>
          <h2 style={styles.heading}>Inicio de sesión exitoso</h2>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '1.5em',
    color: '#333333',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '0.85em',
    color: '#333333',
    textAlign: 'left',
  },
  input: {
    padding: '10px',
    border: '1px solid #cccccc',
    borderRadius: '4px',
    fontSize: '0.95em',
    backgroundColor: '#f9f9f9',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '12px 0',
    backgroundColor: '#D32F2F',
    color: 'white',
    fontSize: '1em',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  registerText: {
    marginTop: '20px',
    fontSize: '0.9em',
    color: '#666666',
  },
  registerLink: {
    color: '#D32F2F',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default LoginForm;
