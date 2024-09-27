import React from "react";
import cl from "./MainContent.module.css";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import FifthSection from "./FifthSection/FifthSection";
import FooterText from "../FooterText/FooterText";
const MainContent = () => {
  return (
    <main className={cl.main}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <FooterText />
    </main>
  );
};

export default MainContent;
