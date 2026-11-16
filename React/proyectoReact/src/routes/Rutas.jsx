import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import Contacto from "../pages/Contacto.jsx";
import AcercaDe from "../pages/AcercaDe.jsx";
import Administracion from "../pages/Administracion.jsx";
import Error from "../pages/Error.jsx";
import AdminDiscentes from "../pages/administracion/AdminDiscentes.jsx";
import AdminNotas from "../pages/administracion/AdminNotas.jsx";
import AdminUsuarios from "../pages/administracion/AdminUsuarios.jsx";
import NotasDws from "../pages/administracion/notas/NotasDws.jsx";
import NotasDwc from "../pages/administracion/notas/NotasDwc.jsx";
import NotasDiw from "../pages/administracion/notas/NotasDiw.jsx";
import DiscenteDetalle from "../pages/DiscenteDetalle.jsx";

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
        <Route path='/acercade' element={<AcercaDe />} />
        <Route path='*' element={<Error />} />
        <Route path='/administracion' element={<Administracion />}>
          <Route path='/administracion/usuarios' element={<AdminUsuarios />} />
          <Route
            path='/administracion/discentes'
            element={<AdminDiscentes />}
          />
          <Route
            path='/administracion/discentedetalle/:identificador'
            element={<DiscenteDetalle />}
          />
          <Route path='/administracion/notas' element={<AdminNotas />}>
            <Route path='/administracion/notas/DWC' element={<NotasDwc />} />
            <Route path='/administracion/notas/DWS' element={<NotasDws />} />
            <Route path='/administracion/notas/DIW' element={<NotasDiw />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Rutas;
