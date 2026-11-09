import React from "react";
import "./App.css";
import MiComponente from "./components/UT02_Componentes/MiComponente.jsx";
import ComponenteFeo from "./components/UT02_Componentes/ComponenteFeo.jsx";
import Interprete from "./components/UT02_Componentes/Practica203/Interprete.jsx";
import Contenedor from "./components/UT02_Componentes/Practica203/Contenedor.jsx";
import StateAviso from "./components/UT03_useState/StateAviso.jsx";
import StateContador from "./components/UT03_useState/StateContador.jsx";
import StateObjetos from "./components/UT03_useState/StateObjetos.jsx";
import StateVerduras from "./components/UT03_useState/StateVerduras.jsx";
import Verduras from "./components/UT03_useState/Verduras.jsx";
import ContadorFeo from "./components/UT03_useState/ContadorFeo.jsx";
import ListadoMal from "./components/UT04_useRef/ListadoMal.jsx";
import Referencias from "./components/UT04_useRef/Referencias.jsx";

function App() {
  return (
    <>
      <div id='center'>
        <h2>UT04 Manejo del DOM en React</h2>
        <Referencias />
        {/* <ListadoMal /> */}
      </div>
    </>
  );
}

export default App;
