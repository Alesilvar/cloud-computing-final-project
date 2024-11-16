import React from 'react';

function CuentaForm() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Banca por Internet</h1>
      </header>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
  },
  header: {
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5em',
    color: '#333',
  },
};

export default CuentaForm;
