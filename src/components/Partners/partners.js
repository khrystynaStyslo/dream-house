import React from 'react';
import './partners.scss';

const Partners = () => {
  return (
    <div className="partners">
      <div className="title">
        Our Partners
      </div>
      <div className="partners-list">
        <div className="partners-list__item">
          <img src="assets/images/logo-1.png" alt=""/>
        </div>
        <div className="partners-list__item">
          <img src="assets/images/logo-2.png" alt=""/>
        </div>
        <div className="partners-list__item">
          <img src="assets/images/logo-3.png" alt=""/>
        </div>
        <div className="partners-list__item">
          <img src="assets/images/logo-4.png" alt=""/>
        </div>
        <div className="partners-list__item">
          <img src="assets/images/logo-5.png" alt=""/>
        </div>
      </div>
    </div>
  )
};

export default Partners;
