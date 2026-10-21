import React from "react";

const VerdurasListadoElemento = ({ nombre, indice }) => {
  return (
    <p>
      <b>
        {indice + 1}.- {nombre}
      </b>
    </p>
  );
};

export default VerdurasListadoElemento;
