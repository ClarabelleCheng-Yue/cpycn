import React, { Component } from 'react';
import NavBar from './NavBar';
import { CenteredBody, Title, TextBody, Lists } from './styles/about';

export default class Products extends Component {
  translate(lang) {
    let translation = (
      <Lists className='list'>
        <div className='titled-list'>
          <span>Multi-Gigabits Connectivity PHY IPs</span>
          <ul>
            {
              [
                'PCIE 4.0 (TSMC 28nm)',
                'PCIE 3.0 (TSMC 40nm)',
                '10GB-Ethernet (TSMC 28nm)'
              ].map(
                (product, i) => <li key={i}>{product}</li>
                )
            }
          </ul>
        </div>

        <div className='titled-list'>
          <span>Apply in End Products</span>
          <ul>
            {
              [
                'SSD, CPU, GPU, TPU',
                [
                  'Servers',
                  <ul>{['Data Centers', 'Cloud Computing Centers'].map((server, i) => <li key={i}>{server}</li>)}</ul>
                ],
                'Self-Driving Vehicles',
                'Facial Recognition'
              ].map(
                (product, i) => <li key={i}>{product}</li>
                )
            }
          </ul>
        </div>
      </Lists>
    );

    if (lang === this.props.languages.chi) {
      translation = (
        <Lists className='list'>
          <div className='titled-list chi'>
            <span>多千兆位连接PHY IP</span>
            <ul className='chi'>
              {
                [
                  'PCIE 4.0（台积电28nm)',
                  'PCIE 3.0（台积电40nm)',
                  '10GB以太网（台积电28nm)'
                ].map(
                  (product, i) => <li key={i}>{product}</li>
                  )
              }
            </ul>
          </div>
          <div className='titled-list chi'>
            <span>最终产品应用</span>
            <ul>
              {
                [
                  'SSD, CPU, GPU, TPU',
                  [
                    '服务器',
                    <ul>{['数据中心', '云计算中心'].map((server, i) => <li key={i}>{server}</li>)}</ul>
                  ],
                  '自驾车',
                  '面部识别'
                ].map(
                  (product, i) => <li key={i}>{product}</li>
                  )
              }
            </ul>
          </div>
        </Lists>
      );
    }

    return translation;
  }

  render() {
    return (
      <div>
        <NavBar {...this.props}/>
        <CenteredBody>
          {
            this.translate(this.props.lang)
          }
        </CenteredBody>
      </div>
    );
  }
}