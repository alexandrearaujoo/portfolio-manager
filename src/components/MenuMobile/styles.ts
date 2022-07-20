import styled, { css } from 'styled-components';

interface MenuProps {
  isOpen: boolean;
}

export const Container = styled.div<MenuProps>`
  position: absolute;
  width: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  background: #007077;
  background: linear-gradient(to top left, #007077 64%, #0b949b 82%);
  opacity: 0;
  pointer-events: none;

  transition: 0.5s;
  transform: translateY(50px);

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
    cursor: pointer;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      ul {
        transform: scale(1);
      }

      @media screen and (min-width: 768px){
        display: none;
      }
    `}
`;

export const Ul = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  transition: 0.7s;
  transform: scale(0.7);

  li {
    cursor: pointer;
  }
`;
