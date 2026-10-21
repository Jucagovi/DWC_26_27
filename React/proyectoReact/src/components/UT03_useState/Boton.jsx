import React from "react";

const Boton = ({ nombre, funcion }) => {
  return (
    <button
      className='Boton_boton'
      onClick={() => {
        funcion();
      }}
    >
      {nombre}
    </button>
  );
};

export default Boton;
