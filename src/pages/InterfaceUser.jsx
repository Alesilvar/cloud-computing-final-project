import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Actions from '../components/Actions';
import Accounts from '../components/Accounts';
import PaymentsHistory from '../components/PaymentsHistory';
import PrestamosHistory from '../components/PrestamosHistory'; // Importa el nuevo componente
import SupportButton from '../components/SupportButton';
import { accountApi, userApi, paymentApi } from '../api';

const InterfaceUser = () => {
  const [userName, setUserName] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [payments, setPayments] = useState([]);
  const [usuarioId, setUsuarioId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener el usuario_id desde localStorage
        const usuario_id = localStorage.getItem('usuario_id');
        if (!usuario_id) {
          console.error('No se encontró el usuario_id en localStorage');
          return;
        }
        setUsuarioId(usuario_id);

        // Obtener el nombre del usuario
        const userResponse = await userApi.post('/usuarios/buscar', { usuario_id });
        const { nombre } = userResponse.data.body;
        setUserName(nombre);

        // Obtener las cuentas del usuario
        const accountResponse = await accountApi.post('/cuentas/listar', { usuario_id });
        setAccounts(accountResponse.data.body);

        // Obtener los pagos del usuario
        const paymentResponse = await paymentApi.post('/pago/listar', { usuario_id });
        const paymentsData = paymentResponse.data.body.map((payment) => ({
          title: payment.titulo,
          description: payment.descripcion,
          amount: payment.monto,
          date: new Date(payment.fecha).toLocaleString(), // Convertir la fecha al formato local
          status: payment.estado,
        }));
        setPayments(paymentsData);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  const interfaceUserStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    padding: 0,
    margin: 0,
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2rem',
    gap: '2rem',
  };

  const leftStyle = {
    width: '40%',
  };

  const rightStyle = {
    width: '70%',
  };

  const historyContainerStyle = {
    display: 'flex', // Estilo para mostrar en columnas
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '1.5rem', // Separación entre los historiales
    marginTop: '2rem',
  };

  const historySectionStyle = {
    flex: 1, // Para que ambos historiales se distribuyan de forma equitativa
  };

  return (
    <div style={interfaceUserStyle}>
      <Header userName={userName} />
      <div style={contentStyle}>
        <div style={leftStyle}>
          <h2 style={{ fontSize: '1.5rem', color: '#F57C00', marginBottom: '1rem' }}>¿Qué vamos a hacer hoy?</h2>
          <Actions />
        </div>
        <div style={rightStyle}>
          <h2 style={{ fontSize: '1.5rem', color: '#F57C00', marginBottom: '1rem' }}>Mis Cuentas</h2>
          <Accounts accounts={accounts} />
          <div style={historyContainerStyle}>
            <div style={historySectionStyle}>
              <h2 style={{ fontSize: '1.5rem', color: '#F57C00', marginBottom: '1rem' }}>Historial de pagos</h2>
              <PaymentsHistory payments={payments} />
            </div>
            <div style={historySectionStyle}>
              <h2 style={{ fontSize: '1.5rem', color: '#F57C00', marginBottom: '1rem' }}>Historial de préstamos</h2>
              <PrestamosHistory usuarioId={usuarioId} />
            </div>
          </div>
        </div>
      </div>
      <SupportButton />
    </div>
  );
};

export default InterfaceUser;