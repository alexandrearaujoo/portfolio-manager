import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0px 5px 8px -7px rgba(0, 0, 0, 0.72);
  border-bottom: 1px solid ${({ theme }) => theme.textWhite};
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
      color: ${({ theme }) => theme.textWhite};
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
      color: ${({ theme }) => theme.textWhite};
      border-bottom: 1px solid transparent;

      :hover {
        border-bottom: 1px solid ${({ theme }) => theme.textWhite};
      }
    }

    a + a {
      margin-right: 1rem;
    }

    li {
      margin-right: 1rem;
      cursor: pointer;
      border-bottom: 1px solid transparent;
      transition: 0.5s;
      color: ${({ theme }) => theme.textWhite};

      :hover {
        border-bottom: 1px solid ${({ theme }) => theme.textWhite};
      }
    }

    li + li {
      margin-right: 1rem;
    }
  }
`;
