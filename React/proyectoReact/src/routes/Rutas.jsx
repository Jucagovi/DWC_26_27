import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import Contacto from "../pages/Contacto.jsx";

/**
 *
 * React debe comportarse como una SPA, por lo que hay que implementar un sistema de rutas
 * que permitan acceder a diferentes partes de la página sin recargar.
 *
 * La biblioteca se instala con el comando: npm install react-router-dom.
 *
 * Los elementos de la biblioteca que se utilizarán serán:
 *    <BrowserRoute>, conecta la aplicación a la URL del navegador
 *    <Routes>, árbol de rutas que dibuja solamente un componente componente,
 *    <Route>, una ruta en el árbol y necesita, al menos, las propiedades path y element,
 *      rutas absolutas -> empiezan con una barra (sustituyen a la ruta existente),
 *      rutas relativas -> no empiezan con una barra (se añaden a la ruta existente),
 *    <Link>, sustituye a la etiqueta <a> de HTML. Recibe en su propiedad to el path de la ruta a dibujar,
 *    useNavigate, hook que controla la API History del navegador ()redirigir al/la usuario/a a una ruta determinada) y
 *    useLocation, hook que ofrece información de las rutas gestionadas por React-router-dom.
 *
 * También se pueden hacer subrutas:
 *    <Outlet>, sirve para indicar el destino de las rutas anidadas (submenús),
 *    useParams, hook que permite gestionar los parámetros pasados en una ruta.
 *
 */

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </>
  );
};

export default Rutas;
