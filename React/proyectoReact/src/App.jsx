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

function App() {
  return (
    <>
      <div id='center'>
        <h2>UT03 El hook useState</h2>
        <ContadorFeo />
      </div>
    </>
  );
}

export default App;
