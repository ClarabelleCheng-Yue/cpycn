import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const FancyBackground = styled.div `
  position: relative;
  width: ${ window.innerWidth }px;
  display: inline-block;
  background-image: url(${(props) => props.bgImg});
  height: ${ window.innerHeight }px;
  z-index: -10;
`;

export default class Background extends Component {
  render() {
    console.log('props of backgroun: ', this.props);
    return (
      <FancyBackground bgImg={this.props.bgImg}>
      { 
        this.props.children 
      }
      </FancyBackground>
    );
  }    
}