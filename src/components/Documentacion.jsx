import React from 'react';
import './Documentacion.css';

export default function Documentacion() {
  return (
    <div className="seccion">
      <h2>Documentación</h2>
      <p>Aquí encontrarás toda la información oficial de nuestra iglesia.</p>

      {/* Lista de documentos */}
      <ul className="doc-list">
        <li>
          <a href="/docs/planos.pdf" download>
            Documentación de Planos
          </a>
        </li>
        <li>
          <a href="/docs/iglesia.pdf" download>
            Documentación de la Iglesia
          </a>
        </li>
        <li>
          <a href="/docs/integrantes.pdf" download>
            Documentación de Integrantes
          </a>
        </li>
        <li>
          <a href="/docs/ministerio.pdf" download>
            Documentación del Ministerio
          </a>
        </li>
      </ul>
    </div>
  );
}
