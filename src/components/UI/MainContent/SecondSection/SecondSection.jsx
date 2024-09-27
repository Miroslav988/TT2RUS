import React from "react";
import BigNumber from "../BigNumber";
import cl from "../FirstSection/FirstSection.module.css";
const SecondSection = () => {
  return (
    <section>
      <BigNumber>2</BigNumber>
      <p className={cl.text + " " + cl.second}>
        Поддержка CorelDraw практически отсутствует в Европе и США, поскольку
        более 98% типографий в этих регионах не используют данный формат.
      </p>
    </section>
  );
};

export default SecondSection;
