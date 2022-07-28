import styled from 'styled-components';

interface ButtonProps {
  width?: string;
  heigth?: string;
  background?: string;
  color?: string
  fontSize?: number
}

export const ButtonStyled = styled.button<ButtonProps>`
  color: black;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;

  span {
    font-size: ${({fontSize}) => fontSize}px;
    width: 140px;
    height: auto;
    float: left;
    transition: 0.5s linear;
    position: relative;
    display: block;
    overflow: hidden;
    padding: 15px;
    text-align: center;
    margin: 0 5px;
    background: transparent;
    text-transform: uppercase;
    font-weight: 900;
    color: ${({ color }) => color};

    :before {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      height: 4px;
      width: 100%;
      border-bottom: 4px solid transparent;
      border-left: 4px solid transparent;
      box-sizing: border-box;
      transform: translateX(100%);
    }

    :after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      border-top: 4px solid transparent;
      border-right: 4px solid transparent;
      box-sizing: border-box;
      transform: translateX(-100%);
    }

    :hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    }
    :hover:before {
      border-color: ${({ theme }) => theme.textWhite};
      height: 100%;
      transform: translateX(0);
      transition: 0.3s transform linear, 0.3s height linear 0.3s;
    }

    :hover:after {
      border-color: ${({ theme }) => theme.textWhite};
      height: 100%;
      transform: translateX(0);
      transition: 0.3s transform linear, 0.3s height linear 0.5s;
    }
  }
`;
