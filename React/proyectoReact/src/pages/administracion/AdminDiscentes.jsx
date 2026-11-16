import React from "react";
import listado from "../../assets/objetos/discentes.json";
import ListadoDiscentes from "./ListadoDiscentes";

const AdminDiscentes = () => {
  return (
    <>
      <h3>Administración de discentes.</h3>
      <div>
        <ListadoDiscentes discentes={listado.discentes} />
      </div>
    </>
  );
};

export default AdminDiscentes;
