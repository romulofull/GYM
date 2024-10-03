import React from 'react';
import gallery from './assets/gallery';  

const Ejercicios = ({ bodyPart }) => {
  const images = {
    pecho: [gallery.imagen1, gallery.imagen2, gallery.imagen3, gallery.imagen4, gallery.imagen5, gallery.imagen6],
    espalda: [gallery.imagen8, gallery.imagen9, gallery.imagen11, gallery.imagen12, gallery.imagen13, gallery.imagen14],
    brazos: [gallery.imagen18, gallery.imagen19, gallery.imagen20, gallery.imagen21,gallery.imagen22],
    antebrazo: [gallery.imagen23, gallery.imagen24, gallery.imagen25,gallery.imagen26,gallery.imagen28],
    hombros: [gallery.imagen29, gallery.imagen30, gallery.imagen31, gallery.imagen32,gallery.imagen33],
    abdominales: [gallery.imagen34, gallery.imagen35, gallery.imagen36,gallery.imagen37,gallery.imagen38,gallery.imagen39,gallery.imagen41],
    gluteos: [gallery.imagen43, gallery.imagen44, gallery.imagen45,gallery.imagen46,gallery.imagen47, gallery.imagen48, gallery.imagen49, gallery.imagen50],
    piernas: [gallery.imagen51, gallery.imagen52,gallery.imagen53,gallery.imagen54,gallery.imagen55, gallery.imagen56,gallery.imagen57],
    adultomayor: [gallery.imagen58, gallery.imagen59, gallery.imagen60, gallery.imagen61,gallery.imagen62,gallery.imagen63,gallery.imagen64, gallery.imagen65,gallery.imagen66, gallery.imagen67, gallery.imagen68, gallery.imagen69, gallery.imagen70,gallery.imagen71,gallery.imagen72, gallery.imagen73, gallery.imagen74, gallery.imagen75, gallery.imagen76]
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
