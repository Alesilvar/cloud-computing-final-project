import React from 'react';

const Header = ({ userName }) => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D32F2F',
    color: 'white',
    padding: '0.25rem 2rem',
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    background: 'orange',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  };

  const imgStyle = {
    width: '20px',
    height: '20px',
    marginRight: '0.5rem',
  };

  return (
    <header style={headerStyle}>
      <h2>Hola, {userName}</h2>
      <button style={buttonStyle}>
        <img
          src="src/assets/settings.png"
          alt="Configuración"
          style={imgStyle}
        />
        Configuración
      </button>
    </header>
  );
};

export default Header;
