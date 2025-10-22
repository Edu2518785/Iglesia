import React, { useState } from 'react';
import './Devocionario.css';

export default function Devocionario() {
  const oraciones = [
    {
      id: 1,
      nombre: 'Padre Nuestro',
      contenido: (
        <p>
          Padre nuestro que estás en el cielo, santificado sea tu nombre; venga a nosotros tu reino;
          hágase tu voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día;
          perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos
          dejes caer en la tentación y líbranos del mal. Amén.
        </p>
      ),
    },
    {
      id: 2,
      nombre: 'Ave María',
      contenido: (
        <p>
          Dios te salve, María, llena eres de gracia, el Señor es contigo; bendita tú eres entre
          todas las mujeres y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,
          ruega por nosotros los pecadores, ahora y en la hora de nuestra muerte. Amén.
        </p>
      ),
    },
    {
      id: 3,
      nombre: 'Gloria al Padre',
      contenido: (
        <p>
          Gloria al Padre, y al Hijo, y al Espíritu Santo, como era en el principio, ahora y siempre,
          por los siglos de los siglos. Amén.
        </p>
      ),
    },
    {
      id: 4,
      nombre: 'Credo de los Apóstoles',
      contenido: (
        <p>
          Creo en Dios, Padre todopoderoso, creador del cielo y de la tierra; y en Jesucristo, su
          único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo; nació de
          Santa María Virgen; padeció bajo el poder de Poncio Pilato; fue crucificado, muerto y
          sepultado; descendió a los infiernos; al tercer día resucitó de entre los muertos; subió a
          los cielos, y está sentado a la derecha de Dios Padre todopoderoso; desde allí ha de venir a
          juzgar a vivos y muertos. Creo en el Espíritu Santo; la santa Iglesia católica; la comunión
          de los santos; el perdón de los pecados; la resurrección de la carne; la vida eterna. Amén.
        </p>
      ),
    },
    {
      id: 5,
      nombre: 'Acto de Contrición',
      contenido: (
        <p>
          Señor mío, Jesucristo, Dios y Hombre verdadero, Creador, Padre y Redentor mío; por ser Tú
          quien eres, Bondad infinita, y porque te amo sobre todas las cosas, me pesa de todo corazón
          de haberte ofendido; también me pesa porque podrías castigarme con las penas del infierno.
          Ayudado de tu divina gracia, propongo firmemente nunca más pecar, confesarme y cumplir la
          penitencia que me fuese impuesta. Amén.
        </p>
      ),
    },
    {
      id: 6,
      nombre: 'Salve Regina',
      contenido: (
        <p>
          Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te
          salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando en
          este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos
          misericordiosos; y después de este destierro, muéstranos a Jesús, fruto bendito de tu
          vientre. ¡Oh, clementísima, oh piadosa, oh dulce Virgen María!
        </p>
      ),
    },
  ];

  const [oracionActiva, setOracionActiva] = useState(null);

  const toggleOracion = (id) => {
    setOracionActiva(oracionActiva === id ? null : id);
  };

  return (
    <main className="devocionario-container">
      <h2>Devocionario</h2>
      <p>Selecciona una oración para verla o cerrarla.</p>

      <div className="oraciones-grid">
        {oraciones.map((o) => (
          <div key={o.id} className="oracion-wrapper">
            <div
              className={`oracion-card ${oracionActiva === o.id ? 'active' : ''}`}
              onClick={() => toggleOracion(o.id)}
            >
              {o.nombre}
            </div>

            {oracionActiva === o.id && (
              <div className="oracion-detalle">
                <h3>{o.nombre}</h3>
                {o.contenido}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
