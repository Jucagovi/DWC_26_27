import React from "react";
import "./AdminNotas.css";
import Contenedor from "../../components/estructura/Contenedor.jsx";
import { Link, Outlet } from "react-router-dom";

const AdminNotas = () => {
  return (
    <>
      <h2>Administración de notas de los/las discentes.</h2>
      <h3>
        Ejemplo de anidamiento doble de rutas (se puede hacer pero es mejor
        evitar).
      </h3>
      <Contenedor>
        <nav className='adminNotas-navegacion'>
          <Link
            className='adminNotas-elementomenu'
            to='/administracion/notas/DWC'
          >
            DWC
          </Link>
          <Link
            className='adminNotas-elementomenu'
            to='/administracion/notas/DWS'
          >
            DWS
          </Link>
          <Link className='adminNotas-elementomenu' to='DIW'>
            DIW
          </Link>
        </nav>
      </Contenedor>
      <Contenedor>
        <Outlet />
      </Contenedor>
    </>
  );
};

export default AdminNotas;
