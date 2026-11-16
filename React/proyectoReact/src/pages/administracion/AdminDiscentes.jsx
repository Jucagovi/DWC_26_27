import React from "react";
import listado from "../../assets/objetos/discentes.json";
import { Link } from "react-router-dom";

const AdminDiscentes = () => {
  return (
    <>
      <h3>Administración de discentes.</h3>
      <div>
        {/* Esto es un componente aparte, como bien sabes. */}
        {listado.discentes.length
          ? listado.discentes.map((elemento) => {
              return (
                // Y esto también, como también sabes.
                <Link
                  key={elemento.id}
                  to={`/administracion/discentedetalle/${elemento.id}`}
                >
                  <p>
                    {elemento.apellidos}, {elemento.nombre}
                  </p>
                </Link>
              );
            })
          : "No se han encontrado discentes."}
      </div>
    </>
  );
};

export default AdminDiscentes;
