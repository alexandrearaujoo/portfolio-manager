import styled from 'styled-components';
import Background from '../../assets/background.jpg';

export const Container = styled.section`
  width: 95%;
  max-width: 250px;
  height: 350px;
  padding: 0.8em;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CardImage = styled.div`
  background: url(${Background}) no-repeat center;
  background-size: cover;
  height: 40%;
  width: 100%;
  border-radius: 0.5rem;
  transition: 0.3s ease;

  :hover {
    transform: translateY(-25%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px,
      rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
  }
`;

export const CardInfo = styled.div`
  padding-top: 10%;
  white-space: normal;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;

export const Title = styled.p`
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
`;
export const Desctiption = styled.p`
  font-size: 0.9em;
  padding-bottom: 10px;

  word-wrap: break-word;
`;

export const Button = styled.button`
  border: 1px solid #252525;
  display: flex;
  padding: 0.3em;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s ease-in-out;

  :hover {
    border: 1px solid #38caef;
    svg {
      color: #38caef;
    }
  }
`;
