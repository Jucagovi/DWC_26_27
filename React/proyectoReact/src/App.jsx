import React from "react";
import "./App.css";
import MiComponente from "./components/UT02/MiComponente.jsx";
import ComponenteFeo from "./components/UT02/ComponenteFeo.jsx";

function App() {
  return (
    <>
      <section id='center'>
        <h2>¡Hola, React!</h2>
        <MiComponente nombre='Feo' apellidos='Horrible'></MiComponente>
      </section>
    </>
  );
}

export default App;
