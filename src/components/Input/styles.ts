import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 95%;

`;

export const InputContainer = styled.div`
  position: relative;
  padding: 20px 0 0;
  margin-top: 10px;
  width: 100%;

  > input {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 17px;
    color: ${({theme}) => theme.textWhite};
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    ::placeholder {
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
    color: ${({theme}) => theme.textWhite};
    pointer-events: none;
  }
`;


export const Button = styled.button`
  position: absolute;
  right: 5px;
  bottom: 5px;
  border: none;
  background-color: transparent;


  svg {
    width: 20px;
    height: 20px;
    color: ${({theme}) => theme.textWhite};
  }
`
