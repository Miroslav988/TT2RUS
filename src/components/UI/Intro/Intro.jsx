import React from "react";
import cl from "./Intro.module.css";
const Intro = ({ url }) => {
  return (
    <div className={cl.intro}>
      <div className={cl.orgRec}></div>
      <h1 className={cl.title}>почему мы не используем coreldraw</h1>
      <div
        className={cl.picture}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
    </div>
  );
};

export default Intro;
