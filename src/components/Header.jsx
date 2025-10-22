import React, { useState, useEffect } from 'react';
import logo from '../logo192.svg';
import './Header.css';

export default function Header({ setSeccionActiva }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrollActivo, setScrollActivo] = useState(false);

  // 🔹 Detectar scroll
  useEffect(() => {
    const manejarScroll = () => {
      if (window.scrollY > 50) {
        setScrollActivo(true);
      } else {
        setScrollActivo(false);
      }
    };

    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  const handleLinkClick = (seccion) => {
    setSeccionActiva(seccion);
    setMenuAbierto(false);
  };

  return (
    <header className={`site-header ${scrollActivo ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="brand">
          <img src={logo} alt="Iglesia logo" className="logo" />
          <div>
            <h1 className="site-title">Iglesia La Luz</h1>
            <p className="site-subtitle">Comunidad y esperanza</p>
          </div>
        </div>

        {/* Botón hamburguesa */}
        <button
          className={`menu-toggle ${menuAbierto ? 'open' : ''}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Menú principal"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Menú */}
        <nav
          className={`nav ${menuAbierto ? 'active' : ''}`}
          aria-label="Main navigation"
        >
          <a href="#inicio" onClick={(e) => { e.preventDefault(); handleLinkClick('inicio'); }}>Inicio</a>
          <a href="#quienessomos" onClick={(e) => { e.preventDefault(); handleLinkClick('quienessomos'); }}>¿Quiénes somos?</a>
          <a href="#documentacion" onClick={(e) => { e.preventDefault(); handleLinkClick('documentacion'); }}>Documentación</a>
          <a href="#devocionario" onClick={(e) => { e.preventDefault(); handleLinkClick('devocionario'); }}>Devocionario</a>
        </nav>
      </div>
    </header>
  );
}
