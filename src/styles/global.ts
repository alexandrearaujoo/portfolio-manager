import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => theme.primary};
    }
  }
  body {
    line-height: 1;
    background-color: #f3f3f3;
    font-family: 'Roboto', sans-serif;
    position: relative;
    height: 100vh;
    display: flex;
    overflow-x: hidden;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
