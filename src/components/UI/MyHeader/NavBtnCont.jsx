import React from "react";
import NavBtn from "./NavBtn";
import cl from "./HeaderStyles.module.css";
const NavBtnCont = () => {
  return (
    <ul className={cl.container}>
      <NavBtn>Направления</NavBtn>
      <NavBtn>Портфолио</NavBtn>
      <NavBtn>Контакты</NavBtn>
    </ul>
  );
};

export default NavBtnCont;
