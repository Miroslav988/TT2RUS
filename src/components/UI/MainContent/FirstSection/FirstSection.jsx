import React from "react";
import BigNumber from "../BigNumber";
import GridItem from "./GridItem";
import fill from "../../../../Images/ill 1.png";
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
          <GridItem url={fill}></GridItem>
          <GridItem url={fill}></GridItem>
          <GridItem url={fill}></GridItem>
          <GridItem url={fill}></GridItem>
          <GridItem url={fill}></GridItem>
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
