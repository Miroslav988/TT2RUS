import React from "react";
import BigNumber from "../BigNumber";
import cl from "../ThirdSection/ThirdSection.module.css";
const FourthSection = () => {
  return (
    <section style={{ paddingBottom: "44px" }}>
      <BigNumber>4</BigNumber>
      <p style={{ marginTop: "41px" }} className={cl.text}>
        Современная лицензия CorelDraw может оцениваться в 600 долларов в год на
        одного пользователя, что может быть финансово недоступным для многих
        типографий. Из-за этого они вынуждены использовать устаревшие версии
        программы, что может привести к искаженному отображению контента.
      </p>
    </section>
  );
};

export default FourthSection;
