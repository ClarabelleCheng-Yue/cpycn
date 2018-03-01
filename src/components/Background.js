import React, { Component } from 'react';
import styled from 'styled-components';

const FancyBackground = styled.div `
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export default class Background extends Component {
  render() {
    return (
      <FancyBackground>
      { 
        this.props.children 
      }
      </FancyBackground>
    );
  }    
}