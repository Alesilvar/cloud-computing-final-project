// src/components/CuentaUsuario.jsx
import React from 'react';

function CuentaUsuario({ nombreCuenta, saldo, interes }) {
  return (
    <div style={styles.card}>
      <div>
        <h3 style={styles.accountName}>{nombreCuenta}</h3>
        <p style={styles.info}>Interés: {interes}%</p>
      </div>
      <div>
        <h3 style={styles.balance}>S/ {saldo.toFixed(2)}</h3>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '15px',
  },
  accountName: {
    margin: 0,
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  info: {
    margin: 0,
    fontSize: '0.9em',
    color: '#555',
  },
  balance: {
    margin: 0,
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#1E88E5',
  },
};

export default CuentaUsuario;