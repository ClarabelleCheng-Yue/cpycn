import React, { Component } from 'react';
import NavBar from './NavBar';
import Background from './Background';
import {
  CompCenter,
  FRecog,
  ICChip,
  ECar,
  AServer,
  Rotary,
  Scale
} from './styles/products';

export default class Products extends Component {

  constructor(props) {
    super(props);

    const products = [
      <div><CompCenter />Data/Cloud Computing Centers</div>, //0
      <div><FRecog />Facial Recognition</div>, //1
      <div><ICChip />IC Chip Products</div>, //2
      <div><ECar />Automated Vehicles</div>, //3
      <div><AServer />Servers</div> //4
    ];

    this.state = {
      products,
      top: 1,
      mid: 0,
      btm: products.length - 1
    }
  }

  componentWillMount() {
    this.startTimer();
  }

  startTimer() {
    setInterval(()=>{
      this.rotateRotary();
    }, 5000);
  }

  rotateRotary() {
    const setNewPosition = (position, length) => {
      return position === length ? 0 : position+1;
    }
    const { products, top, mid, btm } = this.state;
    const length = products.length - 1;
    this.setState({
      top: setNewPosition(top, length),
      mid: setNewPosition(mid, length),
      btm: setNewPosition(btm, length)
    });
  }

  render() {
    const { products, top, mid, btm } = this.state;
    return (
      <div>
        <NavBar />
        <div>
          <ul>Multi-Gigabits Connectivity PHY IPs
            {
              ['PCIE 4.0 (TSMC 28nm)', 'PCIE 3.0 (TSMC 40nm)', '10GB Ethernet (TSMC 28nm)'].map((product, i) => <li key={i}>{product}</li>)
            }
          </ul>
        </div>
        <Rotary>
          <Scale position={0} key={0}>{products[top]}</Scale>
          <Scale position={1} key={1}>{products[mid]}</Scale>
          <Scale position={2} key={2}>{products[btm]}</Scale>
        </Rotary>
      </div>
    );
  }
}