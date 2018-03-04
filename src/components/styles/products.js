import styled, { keyframes } from 'styled-components';

export const ICChip = styled.div `
  background-image: url('../assets/icchip.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 25rem;
  height: 25rem;
`;

export const CompCenter = styled.div `
  background-image: url('../assets/comp_center.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 25rem;
  height: 14.1rem;
`;

export const AServer = styled.div `
  background-image: url('../assets/server.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 25rem;
  height: 25rem;
`;

export const ECar = styled.div `
  background-image: url('../assets/ecar.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 25rem;
  height: 11rem;
`;

export const FRecog = styled.div `
  background-image: url('../assets/frecog.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 25rem;
  height: 29.45rem;
`;

export const Rotary = styled.div `
  position: relative;
  left: 50%;
  overflow: hidden;
  max-width: ${window.innerWidth/3}px;

  * {
    position: relative;
    display: block;
  }
`;

export const Scale = styled.div `
  @keyframes scale {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(${
        props => {
          const p = props.position;
          if (p === 2) {
            return 0;
          } else if (p === 0) {
            return 1.5;
          } else {
            return 0.5;
          }
        }
      });
    }
  }

  display: inline-block;
  animation-delay: 0.2s;
  animation-direction: forward;
  animation-duration: 4s;
  animation-name: scale;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;