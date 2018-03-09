import React, { Component } from 'react';
import NavBar from './NavBar';
import { Points, CenteredBody } from './styles/about';
import Background from './Background';

export default class Home extends Component {

  translate(lang) {
    let translation = <div>
        <div>Accelerating connectivities</div>
        <div>Meet the expanding needs and rapid product development of customers</div>
      </div>;
    if (lang === 'chinese') {
      translation = (
        <div>
          <div>加速连接</div>
          <div>满足客户不断扩大的需求和快速的产品开发</div>
        </div>
      );
    }

    return (
      <div>
      {
        translation
      }  
      </div>
    );
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <CenteredBody>
          <Points>
            {
              this.translate(this.props.lang)
            }
          </Points>
        </CenteredBody>
      </div>
    );
  }
}

