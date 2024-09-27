import React from "react";
import cl from "./HeaderStyles.module.css";
const NavBtn = ({ children }) => {
  return (
    <button className={cl.navBtns} type="button">
      {children}
    </button>
  );
};

export default NavBtn;
