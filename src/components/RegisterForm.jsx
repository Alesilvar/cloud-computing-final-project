import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    dni: '',
    direccion: '',
    fecha_nac: '',
    password: ''
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (e.target.name === "email") {
      setError(false); // Reinicia el error al cambiar el email
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/usuarios/crear', formData);

      if (response.status === 200) {
        console.log('Usuario creado:', response.data);
        navigate('/login'); // Redirige al login si la creación es exitosa
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(true); // Activa el estado de error para mostrar la animación
        console.log('Error al crear usuario:', error.response.data.message);
        alert(error.response.data.message || 'Error: el email ya está registrado.');
      } else {
        console.error('Error inesperado al crear usuario:', error);
        alert('Hubo un error al crear el usuario');
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Únete a BEK</h2>
      <p style={styles.subheading}>Regístrate y descubre todos los beneficios de ser parte de BEK.</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Apellido:
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Tu apellido" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Correo Electrónico:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="ejemplo@correo.com" 
            style={{ 
              ...styles.input, 
              ...(error ? styles.inputError : {}), 
              ...(error ? styles.shakeAnimation : {}) 
            }}
            required 
          />
        </label>
        <label style={styles.label}>
          Teléfono:
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Número de teléfono" style={styles.input} required />
        </label>
        <label style={styles.label}>
          DNI:
          <input type="text" name="dni" value={formData.dni} onChange={handleChange} placeholder="DNI" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Dirección:
          <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Dirección" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Fecha de Nacimiento:
          <input type="date" name="fecha_nac" value={formData.fecha_nac} onChange={handleChange} style={styles.input} required />
        </label>
        <label style={styles.label}>
          Contraseña:
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" style={styles.input} required />
        </label>
        <button type="submit" style={styles.button}>Crear Cuenta</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '450px',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '1.8em',
    color: '#D32F2F',
    marginBottom: '10px',
    fontWeight: '600',
  },
  subheading: {
    fontSize: '1em',
    color: '#666666',
    marginBottom: '25px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '0.9em',
    color: '#333333',
    textAlign: 'left',
    fontWeight: '500',
    marginBottom: '5px',
  },
  input: {
    padding: '12px',
    border: '1px solid #cccccc',
    borderRadius: '6px',
    fontSize: '1em',
    backgroundColor: '#f9f9f9',
    transition: 'border-color 0.3s',
    outline: 'none',
  },
  inputError: {
    borderColor: '#D32F2F',
    backgroundColor: '#ffe6e6',
  },
  shakeAnimation: {
    animation: 'shake 0.5s ease',
    animationIterationCount: 1,
  },
  button: {
    padding: '12px',
    backgroundColor: '#D32F2F',
    color: 'white',
    fontSize: '1.1em',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  '@keyframes shake': {
    '0%, 100%': { transform: 'translateX(0)' },
    '20%, 60%': { transform: 'translateX(-5px)' },
    '40%, 80%': { transform: 'translateX(5px)' },
  }
};

export default RegisterForm;