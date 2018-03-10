import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from "./About";
import Products from "./Products";
import Careers from "./Careers";
import Contact from "./Contact";
import { NavBarList, Centered, Container, Logo, NavListBackground, NavContainer, YellowBr, LogoWrapper } from "./styles/navbar";

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: ['/about', '/products', '/careers', '/contact']
    }
  }

  translate(lang) {
    let translation = (
      <NavBarList>
        {
          ['ABOUT US', 'PRODUCTS', 'CAREERS', 'CONTACT'].map((tab, i) => (
          <li>
            <Link to={`${this.state.tabs[i]}`}>{tab}</Link>
          </li>
          ))
        }
      </NavBarList>
    );
    if (lang === this.props.languages.chi) {
      translation = (
        <NavBarList>
        {
          ['关于我们', '产品', '人才招聘', '联系'].map((tab, i) => (
          <li className='chi'>
            <Link to={`${this.state.tabs[i]}`}>{tab}</Link>
          </li>
          ))
        }
      </NavBarList>
      );
    }

    return translation;
  }

  render() {
    return (
      <Centered>
        <Container>
          <Link to="/"><Logo chi={this.props.lang === this.props.languages.chi}/></Link>
          <NavContainer>
            <NavListBackground />
            {
              this.translate(this.props.lang)
            }
          </ NavContainer>
        </Container>
        <YellowBr />
      </Centered>
    );
  }
}