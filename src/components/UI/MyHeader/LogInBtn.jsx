import React from "react";
import cl from "./HeaderStyles.module.css";
const LogInBtn = ({ children }) => {
  return <button className={cl.logInBtn}>{children}</button>;
};

export default LogInBtn;
