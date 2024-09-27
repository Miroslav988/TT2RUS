import React from "react";
import MyHeader from "./components/UI/MyHeader/MyHeader";
import Intro from "./components/UI/Intro/Intro";
import MainContent from "./components/UI/MainContent/MainContent";
import computerPicture from "./Images/computerPicture.png";
import SideSection from "./components/UI/SideSection/SideSection";
import "./Fonts/fonts.css";
import Carousel from "./components/UI/Corusel/Carousel";
//!images
import carImg1 from "./Images/Коробка для столика 1.png";
import carImg2 from "./Images/Коробка для столика 5.png";
import carImg3 from "./Images/Коробка для столика 6.png";
import carImg4 from "./Images/Коробка для столика 7.png";
import carImg5 from "./Images/Коробка для столика 8.png";
import carImg6 from "./Images/Коробка для столика 9.png";
import carImg7 from "./Images/Коробка для столика 10.png";
import carImg8 from "./Images/Коробка для столика 11.png";
import carImg9 from "./Images/Коробка для столика 12.png";
import carImg10 from "./Images/Коробка для столика 13.png";
//!
const Images1 = [carImg1, carImg2, carImg3, carImg4, carImg5];
const Images2 = [carImg6, carImg7, carImg8, carImg9, carImg10];
function App() {
  return (
    <div style={{ fontFamily: "GothamPro" }} className="App">
      <MyHeader />
      <Intro url={computerPicture} />
      <MainContent />
      <SideSection />
      <div style={{ marginTop: "58px", paddingBottom: "204px" }}>
        <Carousel direction={"right"} images={Images1} />
        <Carousel direction={"left"} images={Images2} />
      </div>
    </div>
  );
}

export default App;
