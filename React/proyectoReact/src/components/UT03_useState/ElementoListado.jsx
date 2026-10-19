import React from "react";

const ElementoListado = (props) => {
  const { nombre, apellidos, calle } = props.datos;


  return (
    <>
      <p>
        {apellidos}, {nombre}
      </p>
    </>
  );
};

export default ElementoListado;
