// App.jsx
import React, { useState } from 'react';
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import BaseColaboradores from './componentes/BaseColaboradores';
import Alert from './componentes/Alert';
import './App.css';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  return (
    <div className="App">
      <div className="titulo-container">
        <h1>Desafío 3 - Base de datos colaboradores</h1>
      </div>

      <div className='contenido'>
        <div className="container-listado">
          <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
        </div>

        <div className="container-formulario">
          <Formulario agregarColaborador={agregarColaborador} />
        </div>
      </div>
    </div>
  );
};

export default App;
