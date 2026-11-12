import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MiComponente from "./components/UT02_componentes/MiComponente.jsx";
import ComponenteFeo from "./components/UT02_componentes/ComponenteFeo.jsx";
import Interprete from "./components/UT02_componentes/Practica203/Interprete.jsx";
import Contenedor from "./components/estructura/Contenedor.jsx";
import Cabecera from "./components/estructura/Cabecera.jsx";
import Principal from "./components/estructura/Principal.jsx";
import Pie from "./components/estructura/Pie.jsx";
import StateAviso from "./components/UT03_useState/StateAviso.jsx";
import StateContador from "./components/UT03_useState/StateContador.jsx";
import StateObjetos from "./components/UT03_useState/StateObjetos.jsx";
import StateVerduras from "./components/UT03_useState/StateVerduras.jsx";
import Verduras from "./components/UT03_useState/Verduras.jsx";
import ContadorFeo from "./components/UT03_useState/ContadorFeo.jsx";
import ListadoMal from "./components/UT04_useRef/ListadoMal.jsx";
import Referencias from "./components/UT04_useRef/Referencias.jsx";
import ListadoBien from "./components/UT04_useRef/ListadoBien.jsx";
import Inicio from "./pages/Inicio.jsx";
import Contacto from "./pages/Contacto.jsx";
import AcercaDe from "./pages/AcercaDe.jsx";
import Menu from "./components/menu/Menu.jsx";
import Error from "./pages/Error.jsx";
import Rutas from "./routes/Rutas.jsx";

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

function App() {
  return (
    <>
      <Contenedor>
        <Cabecera />
        <Principal>
          <Rutas />
        </Principal>
        <Pie />
      </Contenedor>
    </>
  );
}

export default App;
