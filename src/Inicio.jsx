import React from 'react';
import './Inicio.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import logo from './assets/logo.png';

function Inicio() {
  return (
    <div className="Inicio">
      <header className="navbar">
        <img src={logo} alt="ProBanco Logo" className="logo" />
        <h1>ProBanco</h1>
        <nav>
          <a href="#productos">Productos</a>
          <a href="#promociones">Promociones</a>
          <a href="#servicios">Servicios</a>
          <a href="#sucursales">Sucursales</a>
          <a href="#atencion">Atención al Cliente</a>
        </nav>
        <div className="cta-buttons">
          <Link to="/register" className="cta abrir-cuenta">Abre tu Cuenta</Link>
          <Link to="/login" className="cta banca-internet">Banca por Internet</Link>
        </div>
      </header>

      <main>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="carousel"
        >
          <SwiperSlide className="carousel-slide">
            <h2>¡Usa Plin con ProBanco y gana hasta S/50!</h2>
            <p>Participa en nuestra promoción y gana premios cada mes.</p>
          </SwiperSlide>
          <SwiperSlide className="carousel-slide">
            <h2>Tarjetas de crédito sin comisiones</h2>
            <p>Disfruta de nuestros beneficios exclusivos para clientes nuevos.</p>
          </SwiperSlide>
          <SwiperSlide className="carousel-slide">
            <h2>Acceso a nuestros servicios digitales</h2>
            <p>Maneja tu cuenta desde cualquier lugar con nuestra app.</p>
          </SwiperSlide>
        </Swiper>
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
          Banco ProBanco - RUC 20100130204 | Av. República de Panamá 3055 - San Isidro
        </div>
      </footer>
    </div>
  );
}

export default Inicio;
