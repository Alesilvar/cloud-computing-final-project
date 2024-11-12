// src/Inicio.jsx
import React, { useState } from 'react';
import './Inicio.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { Link } from 'react-router-dom';
import { FaPiggyBank, FaCreditCard, FaMoneyBillWave, FaPercentage } from 'react-icons/fa';

function Inicio() {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="Inicio">
      <header className="navbar">
        <h1>BEK</h1>
        <nav>
          <a href="#productos">Productos</a>
          <a href="#promociones">Promociones</a>
          <a href="#servicios">Servicios</a>
          <a href="#sucursales">Sucursales</a>
          <a href="#atencion">Atención al Cliente</a>
        </nav>
        <div className="cta-buttons">
          <Link to="/login" className="cta banca-internet">Banca por Internet</Link>
        </div>
      </header>

      <main>
        <div className="register-section">
          <div className="register-info">
            <h2>Bienvenido a BEK</h2>
            <p>En BEK, estamos comprometidos a brindarte las mejores soluciones bancarias para tu crecimiento personal y profesional. Únete hoy y descubre una nueva forma de manejar tus finanzas de manera segura y eficiente.</p>
            <button onClick={toggleForm} className="toggle-button">
              {isRegister ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
            </button>
          </div>
          {isRegister ? <RegisterForm /> : <LoginForm />}
        </div>

        <section className="productos-servicios">
          <div className="servicio-card">
            <FaPiggyBank className="servicio-icon" />
            <h3>Cuenta de Ahorros</h3>
            <p>Obtén intereses atractivos y maneja tu cuenta desde cualquier lugar.</p>
            <Link to="/savings">Más información &gt;</Link>
          </div>
          <div className="servicio-card">
            <FaCreditCard className="servicio-icon" />
            <h3>Tarjeta de Crédito</h3>
            <p>Beneficios exclusivos para nuestros clientes y sin comisiones de mantenimiento.</p>
            <Link to="/credit-card">Aprender más &gt;</Link>
          </div>
          <div className="servicio-card">
            <FaMoneyBillWave className="servicio-icon" />
            <h3>Préstamos Personales</h3>
            <p>Accede a préstamos con tasas preferenciales para cumplir tus sueños.</p>
            <Link to="/loans">Solicita aquí &gt;</Link>
          </div>
          <div className="servicio-card">
            <FaPercentage className="servicio-icon" />
            <h3>Tasas de Interés</h3>
            <p>Consulta nuestras tasas de interés competitivas en el mercado.</p>
            <Link to="/rates">Ver tasas &gt;</Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="#seguridad">Seguridad</a>
          <a href="#aviso-legal">Aviso Legal</a>
          <a href="#contratacion">Cláusulas Generales de Contratación</a>
          <a href="#mapa-sitio">Mapa del Sitio</a>
          <a href="#reclamaciones">Libro de Reclamaciones</a>
          <a href="#contacto">Llámanos (01) 595-0000</a>
        </div>
        <div className="footer-info">
          Banco BEK - RUC 20100130204 | Av. República de Panamá 3055 - San Isidro
        </div>
      </footer>
    </div>
  );
}

export default Inicio;