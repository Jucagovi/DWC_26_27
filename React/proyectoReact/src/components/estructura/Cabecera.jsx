import React from "react";
import "./Cabecera.css";
import Menu from "../menu/Menu.jsx";

const Cabecera = () => {
  return (
    <>
      <div className='cabecera_principal'>
        <h2>UT04 Rutas en React</h2>
        <p>Las aplicaciones web de React deben ser SPA.</p>
        <Menu />
      </div>
    </>
  );
};

export default Cabecera;
