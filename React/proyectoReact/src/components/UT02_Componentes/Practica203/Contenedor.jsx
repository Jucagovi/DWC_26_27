import React from "react";
import "./contenedor.css";

const Contenedor = (props) => {
  return (
    <>
      <div className='contenedor-contenedor'>
        <p>{props.children}</p>
        <p>Luke, soy tu cabecera.</p>
        <p>Esto es el pie de página.</p>
      </div>
    </>
  );
};

export default Contenedor;
