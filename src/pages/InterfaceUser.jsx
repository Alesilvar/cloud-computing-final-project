import React, { useEffect, useState } from 'react';
import { getUserData } from '../authService';
import { accountApi, cardApi, supportApi } from '../api';
import { Link } from 'react-router-dom';
import CuentaUsuario from '../components/CuentaUsuario';
import UsuarioTarjetas from '../components/UsuarioTarjetas';
import UsuarioPagos from '../components/UsuarioPagos'; // Importa el componente de pagos
import { FaMoneyBillWave, FaMobileAlt, FaCreditCard, FaWater } from 'react-icons/fa';

function InterfaceUser() {
  const [supportTitle, setSupportTitle] = useState('');
  const [supportDescription, setSupportDescription] = useState('');
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState(null);

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

  const actualizarCuentas = async () => {
    try {
      const usuario_id = localStorage.getItem('usuario_id');
      const response = await accountApi.post('/cuentas/listar', { usuario_id });
      setAccounts(response.data.body);
    } catch (error) {
      console.error('Error al actualizar las cuentas:', error);
    }
  };

  const fetchCardsForAccount = async (cuenta_id) => {
    try {
      const usuario_id = localStorage.getItem('usuario_id');
      const response = await cardApi.post('/tarjetas/listar', {
        usuario_id,
        cuenta_id,
      });
      setSelectedCards(response.data.body.tarjetas);
      setSelectedAccountId(cuenta_id);
    } catch (error) {
      console.error('Error al obtener las tarjetas:', error);
    }
  };

  const toggleCards = (cuenta_id) => {
    if (selectedAccountId === cuenta_id) {
      setSelectedAccountId(null);
      setSelectedCards([]);
    } else {
      fetchCardsForAccount(cuenta_id);
    }
  };

  const handleSupportSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) throw new Error('Usuario no autenticado');

      if (!supportTitle || !supportDescription) {
        throw new Error('El título y la descripción son obligatorios');
      }

      const payload = {
        usuario_id,
        titulo: supportTitle,
        descripcion: supportDescription,
      };

      const response = await supportApi.post('/soporte/crear', payload);
      setMessage('Solicitud creada exitosamente: ' + response.data.body.ticket_id);
      setSupportTitle('');
      setSupportDescription('');
    } catch (error) {
      console.error('Error al crear la solicitud de soporte:', error);
      setMessage('Error al crear la solicitud. Intenta nuevamente.');
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
                    cuentaId={account.cuenta_id}
                    actualizarCuentas={actualizarCuentas}
                  />
                  <button
                    style={styles.cardButton}
                    onClick={() => toggleCards(account.cuenta_id)}
                  >
                    {selectedAccountId === account.cuenta_id ? 'Ocultar tarjetas' : 'Ver tarjetas'}
                  </button>
                  <Link to={`/transacciones/${account.cuenta_id}`}>
                    <button style={styles.transactionButton}>Hacer transacción</button>
                  </Link>
                  {selectedAccountId === account.cuenta_id && (
                    <UsuarioTarjetas tarjetas={selectedCards} />
                  )}
                </div>
              </div>
            ))
          ) : (
            <p style={styles.noAccounts}>No tienes cuentas registradas.</p>
          )}
        </div>
        <div style={styles.supportSection}>
          <h3>Solicitudes de Soporte</h3>
          <form onSubmit={handleSupportSubmit} style={styles.form}>
            <label>
              Título:
              <input
                type="text"
                value={supportTitle}
                onChange={(e) => setSupportTitle(e.target.value)}
                style={styles.input}
                required
              />
            </label>
            <label>
              Descripción:
              <textarea
                value={supportDescription}
                onChange={(e) => setSupportDescription(e.target.value)}
                style={styles.textarea}
                required
              ></textarea>
            </label>
            <button type="submit" style={styles.button}>
              Enviar Solicitud
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>

        {/* Sección de Pagos */}
        <div style={styles.supportSection}>
          <UsuarioPagos />
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
  supportSection: {
    marginTop: '20px',
  },
  input: { margin: '10px 0', padding: '10px', width: '100%' },
  textarea: { margin: '10px 0', padding: '10px', width: '100%', height: '100px' },
  button: { backgroundColor: '#1976D2', color: '#FFFFFF', padding: '10px 15px', border: 'none' },
};

export default InterfaceUser;