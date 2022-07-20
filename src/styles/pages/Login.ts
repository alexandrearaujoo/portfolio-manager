import styled, { keyframes } from 'styled-components';

const focus = keyframes`
 0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
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

  background: rgb(0, 112, 119);
  background: linear-gradient(
    0deg,
    rgba(0, 112, 119, 1) 35%,
    rgba(11, 148, 155, 1) 61%
  );

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    background: rgb(0, 112, 119);
    background: linear-gradient(
      90deg,
      rgba(0, 112, 119, 1) 35%,
      rgba(11, 148, 155, 1) 53%
    );
  }
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
  box-shadow: 2px 3px 9px 0px ${({theme}) => theme.textBlack};

  background-color: #025962;
  -webkit-animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.textBlack};
  letter-spacing: 3px;
  -webkit-animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${focus} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
