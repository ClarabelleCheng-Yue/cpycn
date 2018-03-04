import styled from "styled-components";

export const Centered = styled.div`
  position: relative;
  display: block;
  width: ${ window.innerWidth}px;
`;

export const Container = styled.div`
  position: relative;
  left: 0rem;
  height: 17rem;
  width: ${ window.innerWidth }px;
`;

export const Logo = styled.div`
  position: relative;
  display: inline-block;
  background-image: url('../../assets/logos/Cerphy_logo2.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 15rem;
  height: 15rem;
  left: 2.2rem;
  top: -15.5rem;
`;

export const NavContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 75%;
  z-index: 10;
`;

export const NavListBackground = styled.div`
  position: relative;
  display: inline-block;
  border-left: 15rem solid transparent;
  border-bottom: 17rem solid black;
  border-top: 0rem solid transparent;
  z-index: -1;
  width: 100%;
  height: 10rem;
  top: -10rem;
`;

export const NavBarList = styled.ul`
  position: relative;
  margin: 0rem;
  list-style-type: none;
  display: inline-flex;
  flex-direction: row;
  left: 20%;
  top: -18rem;
  white-space: nowrap;
  width: 53rem;
  z-index: 10;

  li {
    cursor: pointer;
    position: relative;
    display: inline;
    padding-right: 11rem;
    font-size: 2rem;
    overflow: visible;
    font-style: italic;
    font-weight: bold;
    top: 45%;

    a {
      text-decoration: none;
    }

    a:link {
      color: white;
    }

    a:visited {
      color: white;
    }

    a:hover {
      color: red;
    }
  }
`;

export const YellowBr = styled.div `
  position: relative;
  width: ${ window.innerWidth }px;
  height: 7rem;
  background-color: #FFDF32;
  z-index: 5;
  top: -4rem;
`;




export const LogoTitle = styled.div`
  position: relative;
  display: inline;
  font-size: 3.1rem;
  font-style: italic;
  margin-left: 0.5rem;
  top: -3.25rem;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  display: inline;
  width: 10rem;
  height: auto;
  background-color: white;
`;