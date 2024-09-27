import React from "react";
import NavBtn from "./NavBtn";
import cl from "./HeaderStyles.module.css";
const NavBtnCont = () => {
  return (
    <nav className={cl.container}>
      <NavBtn>Направления</NavBtn>
      <NavBtn>Портфолио</NavBtn>
      <NavBtn>Контакты</NavBtn>
    </nav>
  );
};

export default NavBtnCont;
