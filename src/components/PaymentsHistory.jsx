import React from 'react';

const PaymentsHistory = ({ payments }) => {
  const paymentsContainerStyle = {
    background: 'white',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
    marginTop: '1.5rem',
    fontSize: '0.95rem',
    color: '#000',
    width: '60%',
    marginLeft: '0',
  };

  const paymentItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const titleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.5rem',
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
    marginRight: '8px',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textAlign: 'center',
  };

  const descriptionStyle = {
    fontWeight: 'bold',
    margin: 0,
  };

  const amountStyle = {
    fontWeight: 'bold',
    margin: 0,
    color: '#F57C00',
  };

  const dateStyle = {
    fontWeight: 'bold',
    margin: 0,
    color: '#555',
  };

  const statusStyle = {
    fontWeight: 'bold',
    margin: 0,
    fontStyle: 'italic',
    color: '#555',
  };

  return (
    <div>
      {payments.map((payment, index) => (
        <div key={index} style={paymentsContainerStyle}>
          <div style={paymentItemStyle}>
            <div style={titleContainerStyle}>
              <img
                src="/src/assets/history-icon.png"
                alt="History"
                style={iconStyle}
              />
              <span style={titleStyle}>Título: {payment.title}</span>
            </div>
            <p style={descriptionStyle}>Descripción: {payment.description}</p>
            <p style={amountStyle}>Monto: S/ {payment.amount}</p>
            <p style={dateStyle}>Fecha: {payment.date}</p>
            <p style={statusStyle}>Estado: {payment.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentsHistory;
