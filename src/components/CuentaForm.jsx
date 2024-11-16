import React, { useState } from 'react';
import api from '../api';

function CuentaForm() {
  const [formData, setFormData] = useState({
    usuario_id: '',
    nombre_cuenta: '',
    saldo: '',
    interes: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const cuentaDatos = {
        usuario_id: formData.usuario_id,
        cuenta_datos: {
          nombre_cuenta: formData.nombre_cuenta,
          saldo: parseFloat(formData.saldo),
          interes: parseFloat(formData.interes),
        },
      };

      const response = await api.post('/crear-cuenta', cuentaDatos);
      setSuccessMessage(response.data.body); // Mensaje del servidor
      setErrorMessage(''); // Limpia errores previos
    } catch (error) {
      console.error('Error al crear la cuenta:', error);
      setErrorMessage(
        error.response?.data?.body || 'Ocurrió un error al intentar crear la cuenta.'
      );
      setSuccessMessage(''); // Limpia mensajes de éxito previos
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Crear una Cuenta Digital</h2>
      {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          ID del Usuario:
          <input
            type="text"
            name="usuario_id"
            value={formData.usuario_id}
            onChange={handleChange}
            placeholder="Ej. USUARIO-123"
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Nombre de la Cuenta:
          <input
            type="text"
            name="nombre_cuenta"
            value={formData.nombre_cuenta}
            onChange={handleChange}
            placeholder="Ej. Cuenta de Ahorros"
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Saldo Inicial:
          <input
            type="number"
            name="saldo"
            value={formData.saldo}
            onChange={handleChange}
            placeholder="Ej. 1000"
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Interés (%):
          <input
            type="number"
            step="0.01"
            name="interes"
            value={formData.interes}
            onChange={handleChange}
            placeholder="Ej. 2.5"
            style={styles.input}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          Crear Cuenta
        </button>
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
  successMessage: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
};

export default CuentaForm;
