import React, { Component } from 'react';
import NavBar from './NavBar';
import { CenteredBody, Title, TextBody, Lists } from './styles/about';

export default class Products extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CenteredBody>
          <Lists className='list'>
            <div className='titled-list'>
            <span>Multi-Gigabits Connectivity PHY IPs</span>
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
            </div>

            <div className='titled-list'>
            <span>Apply in End Products:</span>
            <ul>
              {
                [
                  'SSD, CPU, GPU, TCU',
                  [
                    'Servers', 
                    <ul>{ ['Data Centers', 'Cloud Computing Centers'].map((server, i) => <li key={i}>{server}</li>) }</ul>
                  ], 
                  'Self Driving Vehicles',
                  'Facial Recognition'
                ].map(
                  (product, i) => <li key={i}>{product}</li>
                )
              }
            </ul>
            </div>
          </Lists>
        </CenteredBody>
      </div>
    );
  }
}