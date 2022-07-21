import styled, { keyframes } from 'styled-components';
import Background from '../../assets/background.jpg';

const focus = keyframes`
 0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    opacity: 1;
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;

  background: url(${Background}) no-repeat center;
  background-size: cover;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  max-width: 500px;
  height: 500px;
  border-radius: 8px;
  box-shadow: 2px 3px 9px 0px ${({ theme }) => theme.textBlack};

  backdrop-filter: blur(1px) saturate(180%);
  -webkit-backdrop-filter: blur(1px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  -webkit-animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.textWhite};
  font-weight: bold;
  letter-spacing: 3px;
  -webkit-animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

export const TechsContainer = styled.div`
  position: relative;
  padding: 20px 0 0;
  margin-top: 10px;
  width: 95%;


  > textarea {
    resize: none;
    font-family: inherit;
    width: 100%;
    height: 100px;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 17px;
    color: ${({ theme }) => theme.textWhite};
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    :placeholder {
      color: transparent;
    }

    :placeholder-shown ~ label {
      font-size: 17px;
      cursor: text;
      top: 20px;
    }
    :focus {
      padding-bottom: 6px;
      font-weight: 700;
      border-width: 3px;
      border-image: linear-gradient(to right, #116399, #38caef);
      border-image-slice: 1;
    }
    :focus ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 17px;
      color: #38caef;
      font-weight: 700;
    }
  }

  label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: ${({ theme }) => theme.textWhite};
    pointer-events: none;
  }
`;
