import React, { useState } from 'react';
import './Formulario.css';

function Formulario({ setCitas, citas }) {
  const [form, setForm] = useState({
    mascota: '',
    duenio: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (
      !form.mascota.trim() ||
      !form.duenio.trim() ||
      !form.fecha.trim() ||
      !form.hora.trim() ||
      !form.sintomas.trim()
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const confirmar = window.confirm('¿Deseás agregar esta cita?');
    if (!confirmar) return;

    const nuevaCita = {
      ...form,
      id: Date.now()
    };

    setCitas([...citas, nuevaCita]);

    setForm({
      mascota: '',
      duenio: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <div>
      <h2>Crear mi Cita</h2>
      <form onSubmit={submit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={form.mascota}
          onChange={handleChange}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="duenio"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={form.duenio}
          onChange={handleChange}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={form.fecha}
          onChange={handleChange}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={form.hora}
          onChange={handleChange}
        />

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={form.sintomas}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;
