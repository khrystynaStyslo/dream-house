import React, {useRef} from 'react';
import Slider from 'react-slick';
import './reviews.scss';

const Reviews = () => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    waitForAnimate: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  function next() {
    slider.current.slickNext();
  }
  function previous() {
    slider.current.slickPrev();
  }

  return (
    <div className="reviews">
      <div className="reviews-title">
        Sound Too Good <br/> To Be True?
      </div>
      <div className="reviews-slider">
        <Slider {...settings} ref={slider}>
            <div className="reviews-slider__item">
              <div className="reviews-slider__item-text">We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.</div>
              <p className="reviews-slider__item-author"><b>Adam Morph</b> — CEO Alfatech</p>
            </div>
          <div className="reviews-slider__item">
            <div className="reviews-slider__item-text">The first and most trusted marketplace of design & build house in The World. 100% guaranteed Build safe, comfortable and transparent with a project management for the best result</div>
            <p className="reviews-slider__item-author"><b>Morph</b> — CTO</p>
          </div>
          <div className="reviews-slider__item">
            <div className="reviews-slider__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor dolorem earum officia sit totam velit voluptatibus. A cupiditate deleniti deserunt dolor doloremque, enim explicabo numquam officia possimus tenetur! Cupiditate!</div>
            <p className="reviews-slider__item-author"><b>Adam</b> — Designer</p>
          </div>
        </Slider>
      </div>
      <div className="reviews__buttons">
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
  )
};

export default Reviews;
