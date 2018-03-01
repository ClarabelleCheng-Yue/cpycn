import styled from "styled-components";

export const Centered = styled.div `
  position: relative;
  display: inline-block;
  left: 50vw;
  transform: translate(-50vw);
`;

export const NavBarList = styled.ul `
  position: relative;
  list-style-type: none;
  padding: 0vw 0vw 0vw 3vw;
  display: inline-block;
  left: 4vw;

  li {
    position: relative;
    display: inline-block;
    margin-right: 5vw;
    overflow: visible;
    font-size: 2vw;

    a {
      text-decoration: none;
    }

    a:link {
      color: black;
    }

    a:visited {
      color: black;
    }

    a:hover {
      color: red;
    }
  }
`;

export const Logo = styled.div `
  position: relative;
  display: inline-block;
  background-image: url('../../assets/Cerphy_logo.jpeg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  width: 12vw;
  height: 11vh;
  top: 1vh;
`;

export const LogoTitle = styled.div `
  position: relative;
  display: inline-block;
  font-size: 6vw;
  font-style: italic;
`;

export const LogoWrapper = styled.div `
  position: relative;
  left: 2vw;
  top: 0vh;
  width: auto;
  display: inline-block;
  align-content: center;
`;

