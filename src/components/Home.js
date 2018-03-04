import React, { Component } from 'react';
import NavBar from './NavBar';
import { Points, CenteredBody } from './styles/about';
import Background from './Background';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CenteredBody>
          <Points>
            <div>
              <div>Accelerating connectivities</div>
              <div>Meet the expanding needs and rapid product development of customers</div>
            </div>
          </Points>
        </CenteredBody>
        <Background bgImg={'../assets/processor.png'} />
      </div>
    );
  }
}

