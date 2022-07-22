import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: flex-end;
  background-color: red;
`;

export const Nav = styled.nav`
  display: flex;

  svg {
    display: none;
  }

  @media screen and (max-width: 765px) {
    svg {
      display: flex;
      cursor: pointer;
    }
  }
`;

export const Ul = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      margin-right: 1rem;
      cursor: pointer;
      transition: 0.5s;
      color: #000;

      :hover {
        border-bottom: 1px solid #000;
      }
    }

    a + a {
      margin-right: 1rem;
    }

    li {
      margin-right: 1rem;
      cursor: pointer;
      transition: 0.5s;

      :hover {
        border-bottom: 1px solid #000;
      }
    }

    li + li {
      margin-right: 1rem;
    }
  }
`;
