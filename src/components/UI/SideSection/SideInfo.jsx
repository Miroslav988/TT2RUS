import React from "react";
import cl from "./SideSection.module.css";

const SideInfo = ({ children, url, strong, href }) => {
  return (
    <li style={{ backgroundImage: `url("${url}")` }} className={cl.sideImage}>
      <article className={cl.textContainer}>
        <a href={href} className={cl.text}>
          {children}
          <strong className={cl.strong}>{strong}</strong>
        </a>
        <button className={cl.btn}></button>
      </article>
    </li>
  );
};

export default SideInfo;
