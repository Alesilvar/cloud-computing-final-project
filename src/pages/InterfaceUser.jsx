import React, { useEffect, useState } from 'react';
import { getUserData } from '../authService';
import { accountApi, cardApi } from '../api';
import { Link } from 'react-router-dom';
import CuentaUsuario from '../components/CuentaUsuario';
import { FaMoneyBillWave, FaMobileAlt, FaCreditCard, FaWater } from 'react-icons/fa';

function InterfaceUser() {
  const [userName, setUserName] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usuario_id = localStorage.getItem('usuario_id');
        if (!usuario_id) throw new Error('No se encontró el usuario_id en localStorage');

        const usuario = await getUserData(usuario_id);
        if (usuario && usuario.nombre) {
          setUserName(usuario.nombre);
        } else {
          console.error('Usuario no encontrado');
        }

        const response = await accountApi.post('/cuentas/listar', { usuario_id });
        setAccounts(response.data.body);
      } catch (error) {
        console.error('Error al obtener los datos del usuario o las cuentas:', error);
      }
    };

    fetchUserData();
  }, []);

  const fetchCardsForAccount = async (cuenta_id) => {
    try {
      const usuario_id = localStorage.getItem('usuario_id');
      const response = await cardApi.post('/tarjetas/listar', {
        usuario_id,
        cuenta_id,
      });
      setSelectedCards(response.data.body);
    } catch (error) {
      console.error('Error al obtener las tarjetas:', error);
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h2 style={styles.navTitle}>Hola, {userName}</h2>
      </nav>
      <main style={styles.main}>
        <div style={styles.leftSection}>
          <div style={styles.iconGrid}>
            <div style={styles.iconCard}>
              <FaMoneyBillWave style={styles.icon} />
              <p>Transferir dinero</p>
            </div>
            <div style={styles.iconCard}>
              <FaMobileAlt style={styles.icon} />
              <p>Yapear a celular</p>
            </div>
            <div style={styles.iconCard}>
              <FaCreditCard style={styles.icon} />
              <p>Pagar tarjetas</p>
            </div>
            <div style={styles.iconCard}>
              <FaWater style={styles.icon} />
              <p>Pagar servicios</p>
            </div>
          </div>
        </div>
        <div style={styles.rightSection}>
          {accounts.length > 0 ? (
            accounts.map((account) => (
              <div key={account.cuenta_id} style={styles.accountContainer}>
                <div style={styles.accountBox}>
                  <CuentaUsuario
                    nombreCuenta={account.nombre_cuenta}
                    saldo={account.saldo}
                    interes={account.interes}
                  />
                  <button
                    style={styles.cardButton}
                    onClick={() => fetchCardsForAccount(account.cuenta_id)}
                  >
                    Ver tarjetas
                  </button>
                  <Link to={`/transacciones/${account.cuenta_id}`}>
  <button style={styles.transactionButton}>Hacer transacción</button>
</Link>
                </div>
              </div>
            ))
          ) : (
            <p style={styles.noAccounts}>No tienes cuentas registradas.</p>
          )}
          {selectedCards.length > 0 && (
            <div style={styles.cardsContainer}>
              <h3 style={styles.sectionTitle}>Tarjetas asociadas</h3>
              {selectedCards.map((card) => (
                <div key={card.tarjeta_id} style={styles.cardItem}>
                  <p><strong>Número de Tarjeta:</strong> {card.tarjeta_id}</p>
                  <p><strong>Saldo Disponible:</strong> S/ {card.saldo_disponible}</p>
                  <p><strong>Estado:</strong> {card.estado}</p>
                  <p><strong>Fecha de Emisión:</strong> {card.fecha_emision}</p>
                  <p><strong>Fecha de Vencimiento:</strong> {card.fecha_vencimiento}</p>
                  <p><strong>CVV:</strong> {card.cvv}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#F4F4F4',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
  navbar: {
    padding: '20px',
    backgroundColor: '#D32F2F',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  navTitle: {
    fontSize: '1.8em',
    margin: 0,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '20px',
    marginTop: '30px',
  },
  leftSection: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
  },
  iconGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  iconCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  icon: {
    fontSize: '2em',
    color: '#D32F2F',
    marginBottom: '10px',
  },
  rightSection: {
    width: '65%',
  },
  accountContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  accountBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
  },
  cardButton: {
    backgroundColor: '#D32F2F',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 15px',
    cursor: 'pointer',
    marginTop: '10px',
    alignSelf: 'flex-start',
  },
  transactionButton: {
    backgroundColor: '#1976D2',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 15px',
    cursor: 'pointer',
    marginTop: '10px',
    alignSelf: 'flex-start',
  },
  noAccounts: {
    color: '#666',
    fontStyle: 'italic',
  },
  cardsContainer: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '1.4em',
    color: '#333',
    marginBottom: '10px',
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
  },
};

export default InterfaceUser;