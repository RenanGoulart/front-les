import { createGlobalStyle } from 'styled-components';

// adicionar fonte baixada

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1200px) {
      font-size: 93.75%;
    }

    @media (max-width: 1000px) {
      font-size: 87.5%;
    }

    @media (max-width: 800px) {
      font-size: 81.25%;
    }

    @media (max-width: 600px) {
      font-size: 75%;
    }
  }

  body {
    height: 100vh;
    font-family: 'Inter';
    background-color: #fff;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
