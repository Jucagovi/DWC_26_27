import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav>
        <Link to='/' className='menu-elemento'>
          Inicio
        </Link>
        <Link to='/contacto' className='menu-elemento'>
          Contacto
        </Link>
      </nav>
    </>
  );
};

export default Menu;
