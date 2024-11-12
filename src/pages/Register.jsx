import React, { useState } from 'react';
import api from '../api'; // Importa la configuración de API

function Register() {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/usuarios/crear', formData);
      console.log('Usuario creado:', response.data);
      alert('Usuario creado exitosamente');
    } catch (error) {
      console.error('Error al crear usuario:', error);
      alert('Hubo un error al crear el usuario');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Únete a ProBanco</h2>
      <p style={styles.subheading}>Regístrate y descubre todos los beneficios de ser parte de ProBanco.</p>
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
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="ejemplo@correo.com" style={styles.input} required />
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
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2em',
    color: '#333333',
    marginBottom: '15px',
  },
  subheading: {
    fontSize: '1em',
    color: '#666666',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.9em',
    color: '#333333',
    textAlign: 'left',
  },
  input: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1em',
    backgroundColor: '#f9f9f9',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '14px 0',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '1.1em',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  },
};

export default Register;
