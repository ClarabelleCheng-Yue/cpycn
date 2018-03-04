import styled from 'styled-components';

export const CenteredBody = styled.div `
  position: relative;
  display: block;
  margin: 0rem 3rem 0rem 3rem;
`;

export const Points = styled.div`
  font-family: Verdana;
  font-size: 3rem;
  color: black;
  font-weight: 500;
  
  div {
    text-align: center;

    div {
      margin-top: 1rem;
    }
  }
`;

export const Title = styled.div `
  position: relative;
  display: block;
  font-family: Verdana;
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 2rem;

  span {
    font-size: 2rem;
    font-weight: 100;
    text-align: left;
  }

  div {
    padding-top: 1rem;
    font-size: 1.5rem;
    font-weight: 100;
  }
  
  .sub-title {
    font-size: 1.5rem;
  }

  .points {
    font-size: 1rem;
  }

  .num {
    font-size: 1rem;
    font-weight: 500;
  }

`;

export const TextBody = styled.div `
  font-family: Verdana;
  font-size: 1.5rem;
`;