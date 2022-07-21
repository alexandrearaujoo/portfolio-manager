import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;

  section {
    margin: 20px
  }

  section + section {
    margin: 20px
  }
`
export const H1 = styled.h1`
  display: block;
  text-align: center;
  margin: 15px 0 15px 0;
`
