import React from "react";
import cl from "./HeaderStyles.module.css";
const RegBtn = ({ children }) => {
  return <button className={cl.regBtn}>{children}</button>;
};

export default RegBtn;
