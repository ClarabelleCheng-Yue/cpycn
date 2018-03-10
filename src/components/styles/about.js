import styled, {css} from 'styled-components';

export const CenteredBody = styled.div`
  position: relative;
  display: block;
  margin: 0rem 3rem 0rem 3rem;
  box-shadow: 0px 0px 40px 40px rgba(255, 255, 255, 0.5);
  padding: 2rem;
  left: 50%;
  transform: translate(-50%);
  max-width: 75%;
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

  div.chi {
    font-weight: 700;
  }
`;

export const Title = styled.div`
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

  span.chi {
    font-weight: 500;
  }

  div {
    padding-top: 1rem;
    font-size: 1.5rem;
    font-weight: 100;
  }
  
  .sub-title {
    font-size: 2rem;
    margin: 0rem;
    padding: 0rem;
  }

  .sub-title.chi {
    font-weight: 500;
  }

  .points {
    font-size: 1rem;
  }

  .points.chi {
    font-weight: 500;
  }

  .points.eng {
    font-size: 1.5rem;
  }

  .num {
    font-size: 1rem;
    font-weight: 500;
  }

  ul {
    font-size: 1.5rem;
    font-weight: 100;
    margin: 0rem;

    div {
      font-weight: bold;
    }
  }

  ol {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0rem 0rem 1rem 3rem;
    padding: 0rem;

    div {
      position: relative;
      left: -2rem;
      font-size: 2rem;
    }

    li {
      font-size: 1.5rem;
    }
  }
`;

export const Lists = Title.extend`
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translate(-50%);

  .titled-list {
    margin-top: 2rem;

    span {
      color: red;
      font-size: 3rem;
    }

    li {
      font-size: 2rem;
    }
  }

  .chi {
    * {
      font-weight: 500;
    }
  }
`;

export const TextBody = styled.div`
  font-family: Verdana;
  font-size: 1.5rem;

  ${props => props.chi && css`
    font-size: 1.75rem;
  `}
`;