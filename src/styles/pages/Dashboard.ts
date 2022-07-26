import styled from 'styled-components';


export const Main = styled.main`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;

  section {
    margin: 20px;
  }

  section + section {
    margin: 20px;
  }
`;
export const H1 = styled.h1`
  display: block;
  text-align: center;
  margin: 15px 0 15px 0;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background-color: transparent;
  border: none;
  transition: all 0.2s linear;

  :hover {
      transform: scale(1.1);
  }

  position: relative;
  display: inline-block;

  > span {
    visibility: hidden;
    width: 10rem;
    color: ${({ theme }) => theme.textBlack};
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 25%;
    left: 110%;

    ::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent ${({ theme }) => theme.textBlack} transparent
        transparent;
    }
  }
  :hover span {
    visibility: visible;
  }
`;
