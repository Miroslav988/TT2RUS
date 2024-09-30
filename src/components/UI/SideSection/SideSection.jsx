import React from "react";
import SideInfo from "./SideInfo";
import compPic from "../../../Images/computerPicture.png";
import people from "../../../Images/fb00ef7bbbc40db7d121cbc26391d8f3.jpg";
import googles from "../../../Images/ddad9815e1e38f6042605ef812ec6645.jpg";
import cl from "./SideSection.module.css";
const SideSection = () => {
  return (
    <ul className={cl.section}>
      <SideInfo href={"#"} url={compPic} strong={"CorelDraw"}>
        почему мы не используем
      </SideInfo>
      <SideInfo href={"#"} url={people} strong={"только лучшие"}>
        в команде Creat работают
      </SideInfo>
      <SideInfo href={"#"} url={googles} strong={"для дизайна"}>
        откуда мы черпаем идеи
      </SideInfo>
      <SideInfo href={"#"} url={people} strong={"только лучшие"}>
        в команде Creat работают
      </SideInfo>
    </ul>
  );
};

export default SideSection;
