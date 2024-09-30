import React from "react";
import cl from "./FirstSection.module.css";
const GridItem = ({ url }) => {
  return (
    <li className={cl.gridItem} style={{ backgroundImage: `url(${url})` }}></li>
  );
};

export default GridItem;
