import React, { Component } from 'react';
import NavBar from './NavBar';
import { CenteredBody, Title, TextBody } from './styles/about';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CenteredBody>
          <Title>
            Contact
            <div>
              Mailing Address:
              <span className='sub-title'> Room 1407, Tower G1. No. 1800, Yizhou Avenue, Chengdu, Sichuan. P.R. China 610041</span>
            </div>
            <div>
              Email: lcheng@cerphy.com.cn<br/>
              Cell: 13072863779 // 408-234-3758<br/>
            </div>
          </Title>
        </CenteredBody>
      </div>
    );
  }
}

/**
 * Contact


 */