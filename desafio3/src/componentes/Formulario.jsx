import React, { useState } from 'react';
import Alert from './Alert';
import BaseColaboradores from './BaseColaboradores';

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setMensajeError('Por favor, completa todos los campos.');
      setTimeout(() => {
        setMensajeError('');
      }, 5000);
      return;
    }

    if (edad < 18 || edad > 90) {
      setMensajeError('Ingrese una edad válida (entre 18 y 90 años).');
      setTimeout(() => {
        setMensajeError('');
      }, 5000);
      return;
    }

    if (!/^\d{6,10}$/.test(telefono)) {
      setMensajeError('Ingrese un teléfono válido (6 a 10 dígitos).');
      setTimeout(() => {
        setMensajeError('');
      }, 5000);
      return;
    }

    const nuevoColaborador = {
      id: Date.now().toString(), // Usé una marca de tiempo como ID ya que al hacerlo con un id creciente me daba un error, y se iban duplicando los colaboradores al buscar los por nombre
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };

    agregarColaborador(nuevoColaborador);

    setMensajeExito('Colaborador agregado exitosamente.');
    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');

    setTimeout(() => {
      setMensajeExito('');
    }, 5000);
  };

  return (
    <div>
      {mensajeExito && <Alert mensaje={mensajeExito} tipo="success" />}
      {mensajeError && <Alert mensaje={mensajeError} tipo="danger" />}

      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del colaborador"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Correo del colaborador"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="number"
          placeholder="Edad del colaborador"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cargo del colaborador"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono del colaborador"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <button type="submit">Agregar Colaborador</button>
      </form>
    </div>
  );
};

export default Formulario;
