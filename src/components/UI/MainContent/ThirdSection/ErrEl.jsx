import React from "react";
import cl from "./ThirdSection.module.css";
const ErrEl = ({ url }) => {
  return (
    <div className={cl.err} style={{ backgroundImage: `url("${url}")` }}></div>
  );
};

export default ErrEl;
