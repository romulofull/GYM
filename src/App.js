import React, { useState } from 'react';
import Ejercicios from './Ejercicios';
import './estilos.css';

const App = () => {
  const [bodyPart, setBodyPart] = useState('');

  return (
    <div className="App">
      <h1>Buscador de Ejercicios</h1>
      <label> Selecciona parte de tu cuerpo:</label>
      <select
        id="bodyPart"
        value={bodyPart}
        onChange={(e) => setBodyPart(e.target.value)}
      >
        <option value="">--Seleccionar--</option>
        <option value="pecho">Pecho</option>
        <option value="espalda">Espalda</option>
        <option value="brazos">Brazos</option>
        <option value="antebrazo">Antebrazos</option>
        <option value="hombros">Hombros</option>
        <option value="abdominales">Abdominales</option>
        <option value="gluteos">Gluteos</option>
        <option value="piernas">Piernas</option>
        <option value="adultomayor">Adulto Mayor</option>
      </select>

      <Ejercicios bodyPart={bodyPart} />
    </div>
  );
};

export default App;

