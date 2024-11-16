// src/components/UsuarioTarjetas.jsx
import React, { useState, useEffect } from 'react';
import { accountApi } from '../api';

function UsuarioTarjetas({ usuarioId, cuentaId, onClose }) {
  const [tarjetas, setTarjetas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTarjetas = async () => {
      try {
        const response = await accountApi.post('/tarjetas/listar', {
          usuario_id: usuarioId,
          cuenta_id: cuentaId,
        });
        setTarjetas(response.data.body);
      } catch (err) {
        setError('Error al cargar las tarjetas. Intenta nuevamente.');
        console.error(err);
      }
    };

    fetchTarjetas();
  }, [usuarioId, cuentaId]);

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h3 style={styles.title}>Tarjetas de la Cuenta</h3>
        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {tarjetas.length > 0 ? (
          tarjetas.map((tarjeta) => (
            <div key={tarjeta.tarjeta_id} style={styles.card}>
              <p><strong>Número de Tarjeta:</strong> {tarjeta.tarjeta_id}</p>
              <p><strong>CVV:</strong> {tarjeta.cvv}</p>
              <p><strong>Saldo Disponible:</strong> S/ {tarjeta.saldo_disponible}</p>
              <p><strong>Estado:</strong> {tarjeta.estado}</p>
              <p><strong>Fecha de Emisión:</strong> {tarjeta.fecha_emision}</p>
              <p><strong>Fecha de Vencimiento:</strong> {tarjeta.fecha_vencimiento}</p>
            </div>
          ))
        ) : (
          <p style={styles.noData}>No hay tarjetas asociadas a esta cuenta.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    width: '100%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  noData: {
    color: '#555',
    fontStyle: 'italic',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default UsuarioTarjetas;