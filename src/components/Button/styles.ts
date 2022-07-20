import styled from 'styled-components';

interface ButtonProps {
  width?: string;
  heigth?: string;
  background?: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  height: ${({ heigth }) => heigth};
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.textBlack};
  background-color: ${({ theme }) => theme.textWhite};
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: ${({ theme }) => theme.primary500};
    box-shadow: 0px 15px 20px ${({ theme }) => theme.primary500};
    color: #fff;
    transform: translateY(-7px);

    @media screen and (min-width: 1024px) {
      background-color: ${({ theme }) => theme.primary};
      box-shadow: 0px 15px 20px ${({ theme }) => theme.primary};
    }
  }

  :active {
    transform: translateY(-1px);
  }
`;
