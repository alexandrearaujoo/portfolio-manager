import styled, { keyframes } from 'styled-components';

const scaleInCenter = keyframes`
 0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  backdrop-filter: blur(1px) saturate(180%);
  -webkit-backdrop-filter: blur(1px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  -webkit-animation: ${scaleInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${scaleInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
  height: 580px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  color: black;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;

  span {
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
    color: ${({ theme }) => theme.textWhite};

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

export const CloseButton = styled.button`
  position: absolute;
  top: 1%;
  left: 1%;
  border: none;
  background-color: transparent;

  > svg {
    color: ${({ theme }) => theme.textWhite};
  }
`;
