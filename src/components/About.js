import React, { Component } from 'react';
import NavBar from './NavBar';

export default class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <p>
            Accelerating connectivities
          </p>
          <p>
            Meet the expanding needs and rapid product development of customers
          </p>
        </div>
      </div>
    );
  }
}