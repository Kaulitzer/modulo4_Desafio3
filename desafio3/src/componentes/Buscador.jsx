import React, { useState } from 'react'


const Buscador = ({ filtrarColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    const nuevoTexto = e.target.value;
    setBusqueda(nuevoTexto);
    filtrarColaboradores(nuevoTexto);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar colaborador..."
        value={busqueda}
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;
