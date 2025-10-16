import React from 'react';
import './QuienesSomos.css';
import foto1 from '../assets/images/foto1.jpg';
import foto2 from '../assets/images/foto2.jpg';
import foto3 from '../assets/images/foto3.jpg';
import cardenal1 from '../assets/images/cardenal1.jpg';
import cardenal2 from '../assets/images/cardenal2.jpg';
import cardenal3 from '../assets/images/cardenal3.jpg';
import cardenal4 from '../assets/images/cardenal4.jpg';
import cardenal5 from '../assets/images/cardenal5.jpg';

export default function QuienesSomos() {
  return (
    <main className="qs-container">
      
      {/* Sección principal gráfica existente */}
      <section className="qs-grafico">
        <div className="qs-grafico-content">
          <h2>Somos la Iglesia La Luz</h2>
          <p>
            Una comunidad con trayectoria, guiando y acompañando a nuestras familias 
            en la fe, la esperanza y la solidaridad.
          </p>
          <div className="qs-grafico-fotos">
            <div className="foto-placeholder">
              <img src={foto1} alt="Foto 1" />
            </div>
            <div className="foto-placeholder">
              <img src={foto2} alt="Foto 2" />
            </div>
            <div className="foto-placeholder">
              <img src={foto3} alt="Foto 3" />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 NUEVA SECCIÓN: Liderado por */}
      <section className="qs-liderazgo">
        <h2>Liderado por</h2>

        <div className="lideres">
          <div className="lider">
            <div className="lider-desc">
              <h3>Pastor Juan Pérez</h3>
              <p>Líder espiritual con 20 años de trayectoria guiando nuestra comunidad.</p>
            </div>
            <div className="lider-foto">
              <img src={cardenal1} alt="Pastor Juan Pérez" />
            </div>
          </div>

          <div className="lider reverse">
            <div className="lider-desc">
              <h3>Pastora María López</h3>
              <p>Encargada de ministerios y actividades de servicio social.</p>
            </div>
            <div className="lider-foto">
              <img src={cardenal2} alt="Pastora María López" />
            </div>
          </div>

          <div className="lider">
            <div className="lider-desc">
              <h3>Hermano Carlos Ruiz</h3>
              <p>Coordinador de eventos y programas de integración comunitaria.</p>
            </div>
            <div className="lider-foto">
              <img src={cardenal3} alt="Hermano Carlos Ruiz" />
            </div>
          </div>

          <div className="lider reverse">
            <div className="lider-desc">
              <h3>Hermana Ana Torres</h3>
              <p>Responsable del área de educación y formación espiritual.</p>
            </div>
            <div className="lider-foto">
              <img src={cardenal4} alt="Hermana Ana Torres" />
            </div>
          </div>

          <div className="lider">
            <div className="lider-desc">
              <h3>Hermano Luis Gómez</h3>
              <p>Encargado de comunicación y difusión de nuestras actividades.</p>
            </div>
            <div className="lider-foto">
              <img src={cardenal5} alt="Hermano Luis Gómez" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
