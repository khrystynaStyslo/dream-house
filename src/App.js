import React from 'react';
import Header from "./components/Header/header";
import MainTitle from "./components/MainTitle/mainTitle";
import MainDescription from "./components/MainDescription/mainDescription";
import MainSlider from "./components/MainSlider/mainSlider";
import Archmove from "./components/Archmove/archmove";
import Reviews from "./components/Reviews/reviews";
import Realize from "./components/Realize/realize";
import Partners from "./components/Partners/partners";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Header/>
      <div>
        <MainTitle/>
        <MainDescription/>
        <MainSlider/>
        <Archmove/>
        <Reviews/>
        <Realize/>
        <Partners/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
