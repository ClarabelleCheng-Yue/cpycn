import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Product extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={{ backgroundImage: "url('../assets/test2.png')",
      backgroundRepeat: "no-repeat", width: '1000px', height: '500px', backgroundSize: 'contain' }}>
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