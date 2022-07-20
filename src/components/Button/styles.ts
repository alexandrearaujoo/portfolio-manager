import styled from 'styled-components';

interface ButtonProps {
  width?: string;
  heigth?: string;
  background?: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
  font-family: inherit;
  display: inline-block;
  width: ${props => props.width};
  height: ${props => props.heigth};
  line-height: 2.5em;
  margin: 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};

  :before {
    content: '';
    position: absolute;
    z-index: -1;
    background: ${props => props.background};
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  :hover {
    color: ${({ theme }) => theme.textWhite};
  }

  :before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }
  :hover:before {
    top: -30px;
    left: -30px;
  }

  :active:before {
    background: ${({ theme }) =>
      theme.primary ? theme.primary500 : theme.primary};
    transition: background 0s;
  }
`;
