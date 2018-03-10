import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const FancyBackground = styled.div `
  position: absolute;
  display: inline-block;
  background-image: url(${props => props.bgImg});
  background-size: 100%;
  width: 100%;
  height: 100%;
  z-index: -20;
  top: 15rem;
  opacity: 0.5;
`;

export default class Background extends Component {
  render() {
    return (
      <FancyBackground bgImg={this.props.bgImg}>
      { 
        this.props.children 
      }
      </FancyBackground>
    );
  }    
}