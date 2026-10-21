import React from "react";
import VerdurasListadoElemento from "./VerdurasListadoElemento.jsx";

const VerdurasListado = ({ datos }) => {
  return datos.map((v, i, a) => {
    return <VerdurasListadoElemento key={i} nombre={v} indice={i} />;
  });
};

export default VerdurasListado;
