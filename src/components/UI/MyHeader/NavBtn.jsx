import React from "react";
import cl from "./HeaderStyles.module.css";
const NavBtn = ({ children }) => {
  return (
    <li className={cl.navBtns} type="button">
      <a href="#">{children}</a>
    </li>
  );
};

export default NavBtn;
