import React from "react";
import "./MiComponente.css";

const MiComponente = (props) => {
  const dia = "sabado";
  return (
    <>
      <p>Hola</p>
      <p>
        {props.nombre} {props.apellidos}
      </p>
      <p>{props.children}</p>
      <p
        className={
          dia === "sabado" ? "micomponente-titulo" : "micomponente-apagado"
        }
      >
        {dia === "sabado" ? "¡De fiesta!" : "A clase"}
      </p>
    </>
  );
};

export default MiComponente;
