import React, {useState, useEffect} from 'react';
import Header from "./components/Header/header";
import MainTitle from "./components/MainTitle/mainTitle";
import MainDescription from "./components/MainDescription/mainDescription";
import MainSlider from "./components/MainSlider/mainSlider";
import Archmove from "./components/Archmove/archmove";
import Reviews from "./components/Reviews/reviews";
import Realize from "./components/Realize/realize";
import Partners from "./components/Partners/partners";
import Footer from "./components/Footer/footer";
import BurgerMenu from "./components/BurgerMenu/burgerMenu";

function App() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  function updateWindowDimensions() {
    setWidth(window.innerWidth);
  }
  return width !== 0 && (
    <>
      {console.log('width',width)}
      {width < 1000 ? (
        <BurgerMenu/>
      ) : (
        <Header/>
      )}
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
