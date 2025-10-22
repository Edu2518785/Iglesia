import React from 'react';
import Carousel from './Carousel';
import './Inicio.css';

function Home() {
  return (
    <main className="home">
      <div className="container">
        <Carousel />

        <div className="home-container">
          {/* 🔹 Título principal */}
          <h2 className="home-title">Bienvenido a Nuestra Iglesia</h2>

          {/* 🔹 Frase de bienvenida */}
          <p className="home-subtitle">
            Un lugar de fe, esperanza y comunidad. Nos alegra recibirte.
          </p>

          {/* 🔹 Sección Visión y Misión */}
          <div className="vision-mision">
            <div className="card">
              <h3 className="card-title">Visión</h3>
              <p className="card-text">
                Ser una comunidad unida en amor, guiada por la fe y comprometida con el crecimiento espiritual y el servicio a los demás.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Misión</h3>
              <p className="card-text">
                Compartir el mensaje del Evangelio, fortalecer la fe de cada miembro y apoyar las necesidades espirituales y sociales de nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
