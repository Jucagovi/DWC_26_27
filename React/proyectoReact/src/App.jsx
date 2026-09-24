import React from "react";
import "./App.css";
import MiComponente from "./components/UT02/MiComponente.jsx";
import ComponenteFeo from "./components/UT02/ComponenteFeo.jsx";
import Interprete from "./components/UT02/Practica203/Interprete.jsx";
import Contenedor from "./components/UT02/Practica203/Contenedor.jsx";

function App() {
  return (
    <>
      <section id='center'>
        <h2>¡Hola, React!</h2>
        <Contenedor>
          Hola, soy el children de contenedor.
          <Interprete
            nombre='Feo Horrible'
            imagen='https://images.uncyclomedia.co/inciclopedia/es/thumb/6/63/Feo.png/225px-Feo.png'
          >
            Esta es una biografía muy fea de un tipo muy feo.
          </Interprete>
          <Interprete
            nombre='Fea de veredad'
            imagen='https://images.uncyclomedia.co/inciclopedia/es/thumb/6/63/Feo.png/225px-Feo.png'
          >
            Esta es la biografía muy fea pasada a través de <i>children</i>.
          </Interprete>
        </Contenedor>
      </section>
    </>
  );
}

export default App;
