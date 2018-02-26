import styled from "styled-components";

export const Centered = styled.div `
  position: relative;
  display: inline-block;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
`;

export const NavBarList = styled.ul `
  position: absolute;
  list-style-type: none;
  padding: 0rem 0rem 0rem 1.5rem;
  display: inline-block;
  top: 1rem;
  left: 17rem;
  li {
    position: relative;
    display: inline-block;
    margin-right: 1rem;
    overflow: visible;

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
  background-size: cover;
  background-repeat: no-repeat;
  width: 4.5rem;
  height: 3rem;
`;

export const LogoTitle = styled.div `
  position: absolute;
  display: inline-block;
  bottom: -0.4rem;
  left: 5rem;
  font-size: 3.5em;
  font-style: italic;
`;