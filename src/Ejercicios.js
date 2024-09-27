import React from 'react';
import gallery from './assets/gallery';  

const Ejercicios = ({ bodyPart }) => {
  const images = {
    pecho: [gallery.imagen1, gallery.imagen2, gallery.imagen3],
    espalda: [gallery.imagen4, gallery.imagen5],
    brazos: [gallery.imagen6, gallery.imagen7, gallery.imagen8],
    antebrazo: [gallery.imagen9, gallery.imagen10],
    hombros: [gallery.imagen11, gallery.imagen12, gallery.imagen13],
    abdominales: [gallery.imagen14, gallery.imagen15],
    gluteos: [gallery.imagen18, gallery.imagen19],
    piernas: [gallery.imagen20, gallery.imagen21, gallery.imagen22],
  };

  return (
    <div className="chart-container">
      {images[bodyPart] ? (
        images[bodyPart].map((img, index) => (
          <img key={index} src={img} alt={`${bodyPart} ejercicio ${index + 1}`} />
        ))
      ) : (
        <p>Selecciona una parte del cuerpo para ver los ejercicios</p>
      )}
    </div>
  );
};

export default Ejercicios;
