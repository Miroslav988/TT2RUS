import React from "react";
import cl from "./SideSection.module.css";

const SideInfo = ({ children, url, strong }) => {
  return (
    <div style={{ backgroundImage: `url("${url}")` }} className={cl.sideImage}>
      <div className={cl.textContainer}>
        <p className={cl.text}>
          {children}
          <strong className={cl.strong}>{strong}</strong>
        </p>
        <button className={cl.btn}></button>
      </div>
    </div>
  );
};

export default SideInfo;
