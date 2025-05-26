import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario setCitas={setCitas} citas={citas} />
          </div>
          <div className="one-half column">
            <Listado citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
