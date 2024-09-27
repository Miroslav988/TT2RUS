import React from "react";
import BigNumber from "../BigNumber";
import cl from "../ThirdSection/ThirdSection.module.css";
const FifthSection = () => {
  return (
    <section>
      <BigNumber>5</BigNumber>
      <p style={{ marginTop: "41px" }} className={cl.text}>
        Обучение наших дизайнеров работе в CorelDraw требовало бы значительного
        времени. Учитывая, что это формат с тенденцией к упадку, вкладывание
        человеческого капитала в него становится неоправданно.
      </p>
    </section>
  );
};

export default FifthSection;
