import React from 'react';

const Footer = () => {
  return (
    <header className="header footer">
      <ul className="header-nav">
        <li className="header-nav__item">
          <a href="#">
            Design Gallery
          </a>
        </li>
        <li className="header-nav__item">
          <a href="#">
            List of Architect
          </a>
        </li>
        <li className="header-nav__item">
          <a href="#">
            Articles
          </a>
        </li>
        <li className="header-nav__item">
          <a href="#">
            How it Works
          </a>
        </li>
      </ul>
      <div className="header-logo">
        <img src="/assets/images/logo.png" alt=""/>
      </div>
    </header>
  )
};

export default Footer;
