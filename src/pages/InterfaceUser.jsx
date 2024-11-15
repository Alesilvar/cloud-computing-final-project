// src/pages/InterfaceUser.jsx
import React, { useEffect, useState } from 'react';
import { getUserData } from '../authService';

function InterfaceUser() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usuario_id = localStorage.getItem('usuario_id');
        if (!usuario_id) {
          throw new Error('No se encontró el usuario_id en localStorage');
        }

        // Obtener los datos completos del usuario
        const usuario = await getUserData(usuario_id);
        setUserName(usuario.nombre); // Asegúrate de que `nombre` esté en la respuesta
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h2 style={styles.navTitle}>Interfaz de Usuario</h2>
        {userName && <span style={styles.userName}>Bienvenido, {userName}</span>}
      </nav>
      <div style={styles.content}>
        <h1>Bienvenido a la interfaz de usuario</h1>
        <p>Has iniciado sesión correctamente y puedes acceder a esta página protegida.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#D32F2F',
    color: '#FFFFFF',
  },
  navTitle: {
    margin: 0,
  },
  userName: {
    fontWeight: 'bold',
  },
  content: {
    padding: '20px',
  },
};

export default InterfaceUser;