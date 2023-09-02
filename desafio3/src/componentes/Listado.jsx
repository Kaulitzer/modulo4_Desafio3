// Listado.jsx
import React, { useState } from 'react';
import BaseColaboradores from './BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';

const Listado = ({ colaboradores, eliminarColaborador }) => {
  const [filtro, setFiltro] = useState('');

  const filtrarColaboradores = (texto) => {
    setFiltro(texto);
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
    colaborador.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Listado de Colaboradores</h2>
      <input
        type="text"
        placeholder="Buscar por nombre"
        className="form-control mb-3"
        onChange={(e) => filtrarColaboradores(e.target.value)}
        value={filtro}
      />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {colaboradoresFiltrados.map((colaborador, index) => (
            <tr key={colaborador.id} className={index % 2 === 0 ? 'bg-light' : ''}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarColaborador(colaborador.id)}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listado;
