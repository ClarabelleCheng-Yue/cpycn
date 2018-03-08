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
      translation = <div><div>中文</div></div>;
    }

    return translation;
  }

  render() {
    return (
      <div>
        <NavBar />
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

