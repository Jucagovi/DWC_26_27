import React from "react";
import "./Administracion.css";
import { Link, Outlet } from "react-router-dom";
import Contenedor from "../components/estructura/Contenedor.jsx";

const Administracion = () => {
  return (
    <>
      <h2>Panel de administración.</h2>
      <nav className='administracion-navegacion'>
        {/* Las rutas relativas también funcionan en <Link>. */}
        <Link
          className='administracion-elementomenu'
          to='/administracion/usuarios'
        >
          Usuarios/as
        </Link>
        <Link
          className='administracion-elementomenu'
          to='/administracion/discentes'
        >
          Discentes
        </Link>
        <Link
          className='administracion-elementomenu'
          to='/administracion/notas'
        >
          Notas
        </Link>
      </nav>
      <Contenedor>
        <Outlet />
      </Contenedor>
    </>
  );
};

export default Administracion;
