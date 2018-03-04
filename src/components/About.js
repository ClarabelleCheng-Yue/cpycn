import React, { Component } from 'react';
import NavBar from './NavBar';
import { Points, CenteredBody } from './styles/about';
import Background from './Background';

export default class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CenteredBody>
          <Points>
            <p>
              Accelerating connectivities
          </p>
            <p>
              Meet the expanding needs and rapid product development of customers
          </p>
          </Points>
        </CenteredBody>
        <Background bgImg={'../assets/planes/plane_wlogo.png'} />
      </div>
    );
  }
}