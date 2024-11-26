import React, { useState, useEffect } from 'react';
import { solicitudPrestamoApi } from '../api'; // Asegúrate de tener la API configurada correctamente

const ListaSolicitudPrestamo = ({ usuarioId }) => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    const fetchSolicitudes = async () => {
      try {
        const response = await solicitudPrestamoApi.post('/solicitud-prestamo/listar', { usuario_id: usuarioId });
        setSolicitudes(response.data.body.data); // Ajusta según la estructura de la API
      } catch (error) {
        console.error('Error al obtener las solicitudes:', error);
      }
    };

    if (usuarioId) {
      fetchSolicitudes();
    }
  }, [usuarioId]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Solicitudes de Préstamo</h2>
      {solicitudes.length > 0 ? (
        <ul style={styles.list}>
          {solicitudes.map((solicitud) => (
            <li key={solicitud.solicitud_id} style={styles.listItem}>
              <p><strong>Descripción:</strong> {solicitud.descripcion}</p>
              <p><strong>Monto:</strong> S/ {solicitud.monto}</p>
              <p><strong>Estado:</strong> {solicitud.estado}</p>
              <p><strong>Fecha de Creación:</strong> {new Date(solicitud.fecha_creacion).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={styles.noData}>No se encontraron solicitudes de préstamo.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.5rem',
    color: '#D32F2F',
    marginBottom: '15px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: '15px',
    borderBottom: '1px solid #ccc',
    marginBottom: '10px',
  },
  noData: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default ListaSolicitudPrestamo;