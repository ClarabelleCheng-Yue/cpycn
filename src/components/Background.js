import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const FancyBackground = styled.div `
  position: absolute;
  display: inline-block;
  background-image: url(${props => props.bgImg});
  width: 1920px;
  height: 1200px;
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