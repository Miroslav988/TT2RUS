import React from "react";
import cl from "./FirstSection.module.css";
const GridItem = ({ url }) => {
  return (
    <div
      className={cl.gridItem}
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
};

export default GridItem;
