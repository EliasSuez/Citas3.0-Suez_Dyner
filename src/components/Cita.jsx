import React from 'react';
import './Cita.css';

function Cita(props) {
  return (
    <div className="cita">
      <p>Mascota: <span>{props.mascota}</span></p>
      <p>Dueño: <span>{props.duenio}</span></p>
      <p>Fecha: <span>{props.fecha}</span></p>
      <p>Hora: <span>{props.hora}</span></p>
      <p>Síntomas: <span>{props.sintomas}</span></p>
      <button className="button u-full-width" onClick={props.eliminarCita}>
        Eliminar×
      </button>
    </div>
  );
}

export default Cita;
