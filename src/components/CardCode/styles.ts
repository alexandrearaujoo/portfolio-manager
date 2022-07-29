import styled from 'styled-components';

interface CardProps {
  widht?: number
  height?: number
}

export const Card = styled.div<CardProps>`
  width: 95%;
  max-width: ${props => props.widht}px;
  height: ${props => props.height}px;
  margin: 1rem;
  background: linear-gradient(225deg, rgb(49, 56, 96) 0%, rgb(17, 23, 43) 100%);
  border-radius: 8px;
  z-index: 1;
  transition: 0.5s;
  box-shadow: 0px 5px 8px -1px rgba(0, 0, 0, 0.72);

  :hover {
    transform: scale(1.1);
  }
`;
export const Tools = styled.div`
  display: flex;
  align-items: center;
  padding: 9px;
`;

export const Circle = styled.div`
  padding: 0 4px;
`;

export const Box = styled.span`
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
`;

export const Red = styled(Box)`
  background-color: #ff605c;
`;
export const Yellow = styled(Box)`
  background-color: #ffbd44;
`;
export const Green = styled(Box)`
  background-color: #00ca4e;
`;


export const H4 = styled.h4`
  color: ${({theme}) => theme.textWhite};
  text-align: center;
  margin-bottom: 1.5rem;
`
export const DivImg = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
`
export const Const = styled.div`
  font-weight: 600;
  color: #ff79c6;
  word-wrap: break-word;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`
export const SpanToken = styled.span`
  color: #bd93f9;
`
export const Token = styled.span`
  color: #f1fa8c;
`
