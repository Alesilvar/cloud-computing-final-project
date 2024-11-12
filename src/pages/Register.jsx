import React from 'react';

function Register() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Únete a ProBanco</h2>
      <p style={styles.subheading}>Regístrate y descubre todos los beneficios de ser parte de ProBanco.</p>
      <form style={styles.form}>
        <label style={styles.label}>
          Nombre:
          <input type="text" placeholder="Tu nombre" style={styles.input} />
        </label>
        <label style={styles.label}>
          Correo Electrónico:
          <input type="email" placeholder="ejemplo@correo.com" style={styles.input} />
        </label>
        <label style={styles.label}>
          Contraseña:
          <input type="password" placeholder="Contraseña" style={styles.input} />
        </label>
        <button type="submit" style={styles.button}>Crear Cuenta</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.8em',
    color: '#1a1a1a',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1em',
    color: '#555',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.9em',
    color: '#333',
    textAlign: 'left',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1em',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#ff9f1a',
    color: 'white',
    fontSize: '1em',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  },
};

styles.input[':focus'] = {
  outline: 'none',
  borderColor: '#1a1a1a',
};

styles.button[':hover'] = {
  backgroundColor: '#e88e10',
};

export default Register;
