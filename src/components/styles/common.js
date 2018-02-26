import styled from "styled-components";

export const CenteredEl = styled.div `
  position: relative;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
`;

export const NavBarList = styled.ul `
  position: relative;
  list-style-type: none;

  li {
    position: relative;
    display: inline-block;
    margin-right: 1rem;
  }
`;