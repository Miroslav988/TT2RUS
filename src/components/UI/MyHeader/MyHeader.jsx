import React from "react";
import NavBtnCont from "./NavBtnCont";
import LogInBtn from "./LogInBtn";
import RegBtn from "./RegBtn";
import cl from "./HeaderStyles.module.css";
const MyHeader = () => {
  return (
    <header className={cl.header}>
      <NavBtnCont />
      <LogInBtn>Войти</LogInBtn>
      <RegBtn>Регистрация</RegBtn>
    </header>
  );
};

export default MyHeader;
