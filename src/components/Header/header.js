import React from 'react';
import './header.scss';
import BurgerMenu from "../BurgerMenu/burgerMenu";

const Header = () => {
  return (
    <header className="header">
      <BurgerMenu/>
      <div className="header-logo">
        <img src="/assets/images/logo.png" alt=""/>
      </div>
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
    </header>
  )
};

export default Header;
