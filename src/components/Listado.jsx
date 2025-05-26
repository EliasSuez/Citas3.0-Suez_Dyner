import React from 'react';
import Cita from './Cita';

function Listado({ citas, setCitas }) {
    const eliminarCita = (id) => {
      if (window.confirm('¿Eliminar esta cita?')) {
        setCitas(citas.filter(cita => cita.id !== id));
      }
    };
  
    return (
      <div className="column">
        <h2>Administra tus citas</h2>
        {citas.map(cita => (
          <Cita
            key={cita.id}
            {...cita}
            eliminarCita={() => eliminarCita(cita.id)}
          />
        ))}
      </div>
    );
  }
  
  export default Listado;
