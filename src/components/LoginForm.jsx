// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../api';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userApi.post('/usuarios/login', formData);
      console.log('Respuesta completa:', response.data.body); // Agrega este log
  
      const { token, expires, usuario_id, nombre } = response.data.body;
      console.log('Nombre:', nombre); // Verifica si 'nombre' es undefined
  
      // Guarda el token, el ID de usuario y el nombre en localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiry', expires);
      localStorage.setItem('usuario_id', usuario_id);
      localStorage.setItem('userName', nombre); // Guarda el nombre del usuario
  
      navigate('/interfaceuser');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Hubo un error al iniciar sesión');
    }
  };
  return (
    <div style={styles.container}>
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
        <button type="submit" style={styles.button}>Iniciar Sesión</button>
      </form>
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
};

export default LoginForm;