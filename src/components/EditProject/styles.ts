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
  top: 0;
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

