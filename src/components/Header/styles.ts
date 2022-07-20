import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
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

    li {
      margin-right: 1rem;
      cursor: pointer;
    }

    li + li {
      margin-right: 1rem;
    }
  }
`;
