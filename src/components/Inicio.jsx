import React from 'react';
import Carousel from './Carousel';
import './Inicio.css';

function Home() {
  // Los colores se han cambiado para reflejar el tono sepia/marrón de la barra de navegación:
  const COLOR_MARRON_OSCURO = '#6C4B2E'; // Color aproximado del texto de la barra de navegación (Para títulos).
  const COLOR_MARRON_MEDIO = '#A07C5B'; // Un marrón más claro (Para contenido de tarjetas).
  const COLOR_MARRON_CLARO_LEGIBLE = '#D2B48C'; // Marrón Arena Claro (Para el mensaje de bienvenida, asegurando legibilidad).

  return (
    <main className="home">
      <div className="container">
        <Carousel />
        <div className="home-container">
          {/* Título principal */}
          <h2 style={{
            fontSize: '3rem',
            marginBottom: '2rem',
            color: COLOR_MARRON_OSCURO,
            textAlign: 'center',
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
          }}>
            Bienvenido a Nuestra Iglesia
          </h2>

          {/* Mensaje de bienvenida - ¡CORREGIDO! Usando un marrón claro legible */}
          <p style={{
            fontSize: '2rem',
            fontWeight: '700',
            lineHeight: '1.6',
            color: COLOR_MARRON_CLARO_LEGIBLE, // Nuevo color para la frase de bienvenida
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Un lugar de fe, esperanza y comunidad. Nos alegra recibirte.
          </p>

          {/* Sección Visión y Misión */}
          <div className="vision-mision" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '2.5rem',
            flexWrap: 'wrap'
          }}>
            {/* Tarjeta Visión */}
            <div className="card" style={{
              padding: '2.5rem',
              borderRadius: '20px',
              background: 'rgba(0,0,0,0.35)', 
              maxWidth: '500px',
              flex: '1',
              boxShadow: '0 8px 25px rgba(0,0,0,0.6)'
            }}>
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: COLOR_MARRON_OSCURO
              }}>
                Visión
              </h3>
              <p style={{
                fontSize: '1.4rem',
                lineHeight: '1.6',
                fontWeight: '600',
                color: COLOR_MARRON_MEDIO 
              }}>
                Ser una comunidad unida en amor, guiada por la fe y comprometida con el crecimiento espiritual y el servicio a los demás.
              </p>
            </div>

            {/* Tarjeta Misión */}
            <div className="card" style={{
              padding: '2.5rem',
              borderRadius: '20px',
              background: 'rgba(0,0,0,0.35)', 
              maxWidth: '500px',
              flex: '1',
              boxShadow: '0 8px 25px rgba(0,0,0,0.6)'
            }}>
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: COLOR_MARRON_OSCURO
              }}>
                Misión
              </h3>
              <p style={{
                fontSize: '1.4rem',
                lineHeight: '1.6',
                fontWeight: '600',
                color: COLOR_MARRON_MEDIO
              }}>
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