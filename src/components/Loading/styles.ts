import styled, { keyframes } from 'styled-components';

const load = keyframes`
 to {
    transform: rotate(360deg);
  }
`;

const a2 = keyframes`
to {
    transform: rotate(-360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const  Loader = styled.div`
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 5px solid ${({ theme }) => theme.primary};
  position: relative;
  animation: ${load} 2s linear infinite;

  ::before,
  ::after {
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: 50%;
  }
  ::before {
    border-top: 5px solid ${({theme}) => theme.primary500};
    transform: rotate(120deg);
  }
  ::after {
    border-top: 5px solid #3498db;
    transform: rotate(240deg);
  }
`;

export const Span = styled.span`
  position: absolute;
  font-size: small;
  width: 100px;
  height: 100px;
  color: ${({ theme }) => theme.textWhite};
  text-align: center;
  line-height: 100px;
  animation: ${a2} 2s linear infinite;
`;
