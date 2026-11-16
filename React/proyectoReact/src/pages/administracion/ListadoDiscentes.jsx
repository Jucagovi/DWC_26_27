import React from "react";
import ElementoListadoDiscente from "./ElementoListadoDiscente";

const ListadoDiscentes = ({ discentes }) => {
  return (
    <div>
      {discentes.length
        ? discentes.map((discente) => {
            return (
              <ElementoListadoDiscente key={discente.id} elemento={discente} />
            );
          })
        : "No se han encontrado discentes."}
    </div>
  );
};

export default ListadoDiscentes;
