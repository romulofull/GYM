import React from 'react';
import gallery from './assets/gallery';  

const Ejercicios = ({ bodyPart }) => {
 
  const images = {
    pecho: gallery.imagen1,
    espalda: gallery.imagen2,
    brazos: gallery.imagen3,
    antebrazo: gallery.imagen4,
    hombros: gallery.imagen5,
    abdominales: gallery.imagen6,
    gluteos: gallery.imagen7,
    piernas: gallery.imagen8,
  };

  return (
    <div className="chart-container">
      {images[bodyPart] ? (
        <img src={images[bodyPart]} alt={`${bodyPart} ejercicios`} style={{ width: '100%', height: 'auto' }} />
      ) : (
        <p>Selecciona una parte del cuerpo para ver los ejercicios</p>
      )}
    </div>
  );
};

export default Ejercicios;
