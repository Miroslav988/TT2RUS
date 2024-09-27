import React from "react";
import cl from "./ThirdSection.module.css";
import classes from "../FirstSection/FirstSection.module.css";
import BigNumber from "../BigNumber";
import ErrEl from "./ErrEl";
import errf from "../../../../Images/err1.png";
import errs from "../../../../Images/err2.png";
import { ReactComponent as Arrow } from "../../../../Images/arrow.svg";
import pdfLogo from "../../../../Images/pdfLogo.png";
import aiLogo from "../../../../Images/ai_logo_adobe_illustrator 1.png";
import cLogo from "../../../../Images/Logo 3.png";
import fImg from "../../../../Images/буклет книжка жемчужина-03.png";
import sImg from "../../../../Images/буклет книжка жемчужина-04.png";
import tImg from "../../../../Images/буклет книжка жемчужина-05.png";
import wrongPdf from "../../../../Images/WrongPdf.png";
const ThirdSection = () => {
  return (
    <section className={cl.section}>
      <BigNumber>3</BigNumber>
      <p className={cl.text}>
        Главный недостаток CorelDraw заключается в преобразовании документа во
        внутренний формат bitmap. Это особенно заметно при обработке растровых
        изображений, где могут возникнуть различные артефакты, такие как
        неожиданные грани, изменение цветов или полная инверсия изображения.
      </p>
      <div className={cl.errCont}>
        <ErrEl url={errf}></ErrEl>
        <ErrEl url={errs}></ErrEl>
      </div>
      <p className={classes.botText}>
        В отличие от этого, Illustrator лишен подобных неожиданностей и обладает
        полной совместимостью с форматами PDF и EPS, необходимыми для
        полиграфии. Важно отметить, что, несмотря на возможность сохранения
        файлов в формате PDF, CorelDraw плохо распознает PDF файлы, что может
        привести к потере некоторых элементов макета. Поэтому при подготовке
        макета для офсетной полиграфии Illustrator остается оптимальным выбором.
      </p>
      <div className={cl.circleCont}>
        <div className={cl.circle + " " + cl.first}>
          <img style={{ marginRight: "9px" }} src={pdfLogo} />
        </div>
        <Arrow className={cl.right} />
        <Arrow className={cl.left} />
        <div className={cl.circle + " " + cl.second}>
          <img src={aiLogo} />
        </div>
        <div className={cl.imgCont}>
          <img src={fImg} />
          <img src={sImg} />
          <img src={tImg} />
        </div>
        <div className={cl.circle + " " + cl.third}>
          <img src={cLogo} />
        </div>
        <img className={cl.wrongPdf} src={wrongPdf} />
      </div>
    </section>
  );
};

export default ThirdSection;
