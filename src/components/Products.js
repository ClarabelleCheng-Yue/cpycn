import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Product extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <p>
            Product
          </p>
          <p>
            Meet the expanding needs and rapid product development of customers
          </p>
        </div>
      </div>
    );
  }
}