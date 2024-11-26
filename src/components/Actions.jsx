import React from 'react';
import { useNavigate } from 'react-router-dom';

const Actions = () => {
  const navigate = useNavigate();

  const actions = [
    { id: 1, name: 'Transacción entre cuentas', icon: 'src/assets/icon1.png', path: '/transacciones' },
    { id: 2, name: 'Solicitar Préstamo', icon: 'src/assets/icon2.png', path: '/SolicitudPrestamo' },
    { id: 3, name: 'Pagar deudas', icon: 'src/assets/icon3.png', path: '/proximamente' },
    { id: 4, name: 'Pagar servicios', icon: 'src/assets/icon4.png', path: '/proximamente' },

  ];

  const actionsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    padding: '1rem',
  };

  const actionButtonStyle = {
    fontWeight: 'bold',
    background: 'white',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '1rem',
    cursor: 'pointer',
  };

  const actionImageStyle = {
    width: '50px',
    height: '50px',
  };

  return (
    <div style={actionsContainerStyle}>
      {actions.map((action) => (
        <button
          key={action.id}
          style={actionButtonStyle}
          onClick={() => navigate(action.path)}
        >
          <img src={action.icon} alt={action.name} style={actionImageStyle} />
          <p>{action.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Actions;
