import styled, { keyframes } from 'styled-components';
import Background from '../../assets/background.webp'

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

export const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${Background}) center no-repeat;
  background-size: cover;
`;

export const Div = styled.div`
  width: 95%;
  max-width: 350px;

  -webkit-animation: ${scaleInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${scaleInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  > img {
    width: 30%;
    height: 30%;
  }

  > p {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.textWhite};
  }

  @media screen and (min-width: 1024px) {
    > p {
      font-size: 2rem;
    }
    > img {
      width: 50%;
      height: 50%;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  height: 120px;
  justify-content: space-between;
  flex-direction: column;
  -webkit-animation: ${scaleInCenter} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${scaleInCenter} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    width: 350px;
  }
`;
