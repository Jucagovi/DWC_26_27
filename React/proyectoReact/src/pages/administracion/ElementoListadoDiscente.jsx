import React from "react";
import { Link } from "react-router-dom";

const ElementoListadoDiscente = ({ elemento }) => {
  return (
    <Link to={`/administracion/discentedetalle/${elemento.id}`}>
      <p>
        {elemento.apellidos}, {elemento.nombre}
      </p>
    </Link>
  );
};

export default ElementoListadoDiscente;
