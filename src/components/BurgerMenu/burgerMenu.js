import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './burgerMenu.scss';

const BurgerMenu = () => {
  const showSettings = (event) => {
    event.preventDefault();
  }
    return (
      <Menu right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
};

export default BurgerMenu;
