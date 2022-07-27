import styled, { keyframes } from 'styled-components';
import Background from '../../assets/background.webp'

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
  max-width: 400px;
  height: 350px;
  border-radius: 8px;
  box-shadow: 2px 3px 9px 0px ${({ theme }) => theme.textBlack};

  backdrop-filter: blur(1px) saturate(180%);
  -webkit-backdrop-filter: blur(1px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  -webkit-animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  p {
    color: ${({ theme }) => theme.textWhite};

    a {
      color: #38caef;
      transition: 0.5s;

      :hover {
        color: ${({ theme }) => theme.primary};
        border-bottom: 1px solid ${({ theme }) => theme.primary};
      }
    }
  }
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.textWhite};
  font-weight: bold;
  letter-spacing: 3px;
  -webkit-animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

