import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from "./About";
import Products from "./Products";
import Careers from "./Careers";
import Contact from "./Contact";
import { NavBarList, Centered, Logo, LogoTitle, LogoWrapper } from "./styles/navbar";

export default class NavBar extends Component {
  render() {
    return (
      <Centered>
        <LogoWrapper>
          <Logo />
          <LogoTitle>CerPhy</LogoTitle>
        </LogoWrapper>
        <NavBarList>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/careers">CAREERS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </NavBarList>
      </Centered>
    );
  }
}