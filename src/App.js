import React, { useState } from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import QuienesSomos from './components/QuienesSomos';
import Documentacion from './components/Documentacion';
import Devocionario from './components/Devocionario';
import fondo from './assets/images/fondo.jpg';
import './styles/App.css';

function App() {
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  return (
    <div className="App" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* 🔹 Fondo adaptable a todas las pantallas */}
      <div
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover', // ✅ llena toda la pantalla
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'fixed', // ✅ se mantiene visible al hacer scroll
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.25, // puedes ajustar la visibilidad
        }}
      ></div>

      {/* 🔹 Header */}
      <Header setSeccionActiva={setSeccionActiva} />

      {/* 🔹 Secciones */}
      {seccionActiva === 'inicio' && <Inicio />}
      {seccionActiva === 'quienessomos' && <QuienesSomos />}
      {seccionActiva === 'documentacion' && <Documentacion />}
      {seccionActiva === 'devocionario' && <Devocionario />}
    </div>
  );
}

export default App;
