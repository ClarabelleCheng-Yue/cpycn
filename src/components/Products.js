import React, { Component } from 'react';
import NavBar from './NavBar';
import Background from './Background';
import {
  CenteredList,
  CompCenter,
  FRecog,
  ICChip,
  ECar,
  AServer,
  Rotary,
  RotaryItem,
  Row1,
  Row2
} from './styles/products';

export default class Products extends Component {

  constructor(props) {
    super(props);
    const products = [
      <RotaryItem>
        <CompCenter />
        <div>Data/Cloud Computing Centers</div>
      </RotaryItem>,
      <RotaryItem>
        <FRecog />
        <div>Facial Recognition</div>
      </RotaryItem>,
      <RotaryItem style={{ 
        top: '-5rem',
        left: '2rem'
      }}>
        <ICChip />
        <div>IC Chip Products</div>
      </RotaryItem>,
      <RotaryItem>
        <ECar />
        <div>Automated Vehicles</div>
      </RotaryItem>,
      <RotaryItem>
        <AServer />
        <div>Servers</div>
      </RotaryItem>
    ];

    this.state = {
      products
    }
  }

  // componentWillMount() {
  //   // this.startTimer();
  // }

  // startTimer() {
  //   setInterval(()=>{
  //     this.rotateRotary();
  //   }, 5000);
  // }

  // rotateRotary() {
  //   const setNewPosition = (position, length) => {
  //     return position === length ? 0 : position+1;
  //   }
  //   const { products, top, mid, btm } = this.state;
  //   const length = products.length - 1;
  //   this.setState({
  //     top: setNewPosition(top, length),
  //     mid: setNewPosition(mid, length),
  //     btm: setNewPosition(btm, length)
  //   });
  // }

  render() {
    const { products, top, mid, btm } = this.state;
    return (
      <div>
        <NavBar />
        <CenteredList>
          <div>Multi-Gigabits Connectivity PHY IPs</div>
          <ul>
            {
              [
                'PCIE 4.0 (TSMC 28nm)', 
                'PCIE 3.0 (TSMC 40nm)', 
                '10GB Ethernet (TSMC 28nm)'
              ].map(
                (product, i) => <li key={i}>{product}</li>
              )
            }
          </ul>
        </CenteredList>
        <Rotary>
          <Row1>{ [products[3], products[1]] }</Row1>
          <Row2>{ [products[0], products[2], products[4]] }</Row2>
        </Rotary>
      </div>
    );
  }
}