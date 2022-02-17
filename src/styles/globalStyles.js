import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background: #C8C7CC;
  }
  h1 {
    font-size: 1.6rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 1rem 0;
`;

export const CardsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  .card {
    width: 100%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: #ffffff;
    overflow: hidden;
    p {
      flex: 1;
      word-break: break-all;
    }
    .imageWrapper {
      height: 6rem;
      width: 6rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
