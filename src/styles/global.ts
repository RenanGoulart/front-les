import { createGlobalStyle } from "styled-components";

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
    font-family: 'Poppins', sans-serif;
    background-color: #fff;
  }

  h1, h2, h3, h4, h5 ,h6 p, span, label, input, select, option, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    width: 60px;
    height: 40px;

    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white_ff};

    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.purple_1f};

    cursor: pointer;
  }
`;

export default GlobalStyle;
