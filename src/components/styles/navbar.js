import styled from "styled-components";

export const Centered = styled.div `
  position: relative;
  display: block;
  width: 100%;
  height: 6rem;
  background-color: black;
  padding: 0vw 0vw 1.5rem 1.5rem;
`;

export const NavBarList = styled.ul `
  position: absolute;
  list-style-type: none;
  display: inline-block;
  left: 25rem;
  top: 3.1rem;
  white-space: nowrap;

  li {
    position: relative;
    display: inline;
    padding-right: 6rem;
    font-size: 1rem;
    overflow: visible;

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

export const Logo = styled.div `
  position: relative;
  display: inline-block;
  background-image: url('../../assets/Cerphy_logo.jpeg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  width: 5rem;
  height: 5rem;
  top: 0.5rem;
`;

export const LogoTitle = styled.div `
  position: relative;
  display: inline-block;
  font-size: 3.1rem;
  font-style: italic;
  margin-left: 0.5rem;
`;

export const LogoWrapper = styled.div `
  position: relative;
  left: 2rem;
  top: 0rem;
  width: auto;
  display: inline-block;
  color: white;
`;

export const Container = styled.div `
  position: relative;
`;