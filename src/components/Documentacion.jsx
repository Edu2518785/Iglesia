import React from 'react';
import './Documentacion.css';

export default function Documentacion() {
  return (
    <div className="seccion">
      <h2>Documentación</h2>
      <p>Aquí encontrarás toda la información oficial de nuestra iglesia.</p>

      <ul className="doc-list">
        <li className="doc-item">
          <a href="/docs/planos.pdf" download>
            Documentación de Planos
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/iglesia.pdf" download>
            Documentación de la Iglesia
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/integrantes.pdf" download>
            Documentación de Integrantes
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/ministerio.pdf" download>
            Documentación del Ministerio
          </a>
        </li>
      </ul>
    </div>
  );
}
