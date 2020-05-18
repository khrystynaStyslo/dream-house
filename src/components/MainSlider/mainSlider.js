import React, {useRef} from 'react';
import Slider from 'react-slick';
import './mainSlider.scss';

const MainSlider = () => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.5
        }
      }
    ]
  };

  function next() {
    slider.current.slickNext();
  }
  function previous() {
    slider.current.slickPrev();
  }

  return (
    <div className="main-list">
      <div className="main-list__info">
        <h2 className="title">Build professional valuable room for you</h2>
        <div className="main-list__buttons">
          <button className="button" onClick={() => previous()}>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8V6H4L8 2L7 0L0 7L7 14L8 12L4 8H16Z" fill="#473534"/>
            </svg>
          </button>
          <button className="button" onClick={() => next()}>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8V6H12L8 2L9 0L16 7L9 14L8 12L12 8H0Z" fill="#473534"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="main-list__slider">
        <Slider ref={slider} {...settings}>
          <div className="slider__item" key={1}>
            <img src="assets/images/img-01.png" alt=""/>
          </div>
          <div className="slider__item" key={2}>
            <img src="assets/images/img-02.png" alt=""/>
          </div>
          <div className="slider__item" key={3}>
            <img src="assets/images/img-03.png" alt=""/>
          </div>
          <div className="slider__item" key={4}>
            <img src="assets/images/img-01.png" alt=""/>
          </div>
          <div className="slider__item" key={5}>
            <img src="assets/images/img-02.png" alt=""/>
          </div>
          <div className="slider__item" key={6}>
            <img src="assets/images/img-03.png" alt=""/>
          </div>
        </Slider>
      </div>
    </div>
  )
};

export default MainSlider;
