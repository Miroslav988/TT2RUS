import React from "react";
import cl from "./FirstSection/FirstSection.module.css";
const BigNumber = ({ children }) => {
  return <div className={cl.bigNumber}>{children}</div>;
};

export default BigNumber;
