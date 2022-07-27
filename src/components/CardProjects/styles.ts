import styled from 'styled-components';

export const Container = styled.section`
  width: 95%;
  max-width: 250px;
  height: 400px;
  padding: 0.8em;
  background: linear-gradient(225deg, rgb(49, 56, 96) 0%, rgb(17, 23, 43) 100%);
  position: relative;
  overflow: visible;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s;

  :hover {
    transform: scale(1.1);
  }
`;

export const CardImage = styled.img`
  height: 40%;
  width: 100%;
  border-radius: 0.5rem;
  transition: 0.3s ease;
  object-fit: cover;
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
  flex-direction: column;
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
  color: ${({ theme }) => theme.textWhite};
`;
export const Desctiption = styled.p`
  font-size: 0.9em;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.textWhite};

  word-wrap: break-word;
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.textWhite};
  display: flex;
  padding: 0.3em;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s ease-in-out;

  > svg {
    color: ${({ theme }) => theme.textBlack};
    transition: 0.5s;
  }

  :hover {
    border: 1px solid #38caef;
    svg {
      color: #38caef;
    }
  }
`;
