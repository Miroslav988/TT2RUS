import React from "react";
import SideInfo from "./SideInfo";
import compPic from "../../../Images/computerPicture.png";
import people from "../../../Images/Rectangle 161124045.png";
import googles from "../../../Images/Rectangle 161124047.png";
import cl from "./SideSection.module.css";
const SideSection = () => {
  return (
    <section className={cl.section}>
      <SideInfo url={compPic} strong={"CorelDraw"}>
        почему мы не используем
      </SideInfo>
      <SideInfo url={people} strong={"только лучшие"}>
        в команде Creat работают
      </SideInfo>
      <SideInfo url={googles} strong={"для дизайна"}>
        откуда мы черпаем идеи
      </SideInfo>
      <SideInfo url={people} strong={"только лучшие"}>
        в команде Creat работают
      </SideInfo>
    </section>
  );
};

export default SideSection;
