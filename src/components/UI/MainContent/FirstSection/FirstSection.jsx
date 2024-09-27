import React from "react";
import BigNumber from "../BigNumber";
import GridItem from "./GridItem";
import fill from "../../../../Images/ill 1.png";
import sill from "../../../../Images/ill2.jpg";
import till from "../../../../Images/ill 7.jpg";
import fiill from "../../../../Images/ill 4.jpg";
import siill from "../../../../Images/ill 5.jpg";
import seill from "../../../../Images/ill 6.jpg";
import cl from "./FirstSection.module.css";

const FirstSection = () => {
  return (
    <section>
      <div className={cl.title}>
        В мире дизайна мы сделали выбор в пользу Adobe, оставив за бортом формат
        CorelDraw. Давайте разберем, почему именно Adobe стал нашим надежным
        союзником в творчестве.
      </div>
      <BigNumber>1</BigNumber>
      <div className={cl.textAndGrid}>
        <p className={cl.text}>
          Adobe - это компания, представляющая широкий спектр продуктов, среди
          которых вы, вероятно, знакомы с основными: 
        </p>
        <div className={cl.grid}>
          <GridItem url={fill}></GridItem>
          <GridItem url={sill}></GridItem>
          <GridItem url={till}></GridItem>
          <GridItem url={fiill}></GridItem>
          <GridItem url={siill}></GridItem>
          <GridItem url={seill}></GridItem>
        </div>
        <span className={cl.sign}>а также более 90 других продуктов</span>
      </div>
      <p className={cl.botText}>
        Более тысячи специалистов по всему миру активно участвуют в разработке и
        обеспечивают высокое качество продуктов и их разнообразные возможности.
      </p>
      <p className={cl.botText}>
        В то время как CorelDraw ограничивается только CorelDraw.
      </p>
    </section>
  );
};

export default FirstSection;
