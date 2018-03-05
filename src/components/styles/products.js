import styled, { keyframes } from 'styled-components';

export const ICChip = styled.div `
  position: relative;
  display: inline-block;
  background-image: url('../assets/icchip.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 25rem;
  height: 20rem;
`;

export const CompCenter = styled.div `
  position: relative;
  display: inline-block;
  background-image: url('../assets/comp_center.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 25rem;
  height: 14.1rem;
`;

export const AServer = styled.div `
  position: relative;
  display: inline-block;
  background-image: url('../assets/server.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 28rem;
  height: 20rem;
`;

export const ECar = styled.div `
  position: relative;
  display: inline-block;
  background-image: url('../assets/ecar.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 25rem;
  height: 11rem;
`;

export const FRecog = styled.div `
  position: relative;
  display: inline-block;
  background-image: url('../assets/frecog.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 16.7rem;
  height: 19.6rem;
  left: 15%;
`;

export const Rotary = styled.div `
  position: relative;
  max-width: ${2 * window.innerWidth/3}px;
`;

export const RotaryItem = styled.div `
  position: relative;
  display: inline-block;
  width: 25rem;

  div {
    text-align: center;
  }
`;

export const CenteredList = styled.div `
  position: relative;
  display: inline-block;
  font-family: Verdana;
  max-width: ${window.innerWidth / 3}px;
  left: 50%;
  transform: translate(-50%);
  border: 3px solid black;
  box-shadow: 1rem 2rem 1rem #d3d3d3, -1rem 2rem 1rem #d3d3d3;

  div {
    font-size: 4rem;
    text-align: center;
  }

  ul {
    text-align: center;
    position: relative;
    left: 50%;
    transform: translate(-50%);

    li {
      position: relative;  
      font-size: 2rem;
      list-style-type: none;
    }
  }
`;

const Row = styled.div `
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Row1 = Row.extend`
  top: -15rem;

  > ${ RotaryItem } {
    left: 20%;
    transform: translate(-25%);
  }

  ${ RotaryItem }:last-of-type {
    left: 80%;
    transform: translate(-25%);
  }
`;

export const Row2 = Row.extend `
  top: -12rem;
  left: 13%;

  > ${RotaryItem} {
    margin: 0rem 4rem 0rem 4rem;
  }
`;  
