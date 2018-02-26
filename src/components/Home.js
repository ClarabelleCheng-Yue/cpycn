import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from "./About";
import Products from "./Products";
import Careers from "./Careers";
import Contact from "./Contact";
import { NavBarList, CenteredEl } from "./styles/common";

export default class Home extends Component {
  render() {
    return (
      <CenteredEl>
        <NavBarList>
          <li>
            <Link to="/about">ABOUT CERPHY</Link>
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
      </CenteredEl>
    );
  }
}