import styled from 'styled-components';

export const Card = styled.div`
  width: 95%;
  max-width: 500px;
  height: 450px;
  margin: 0 auto;
  background-color: #011522;
  border-radius: 8px;
  z-index: 1;
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

`
export const DivImg = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  justify-content: space-between;
`
