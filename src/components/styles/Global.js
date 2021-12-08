import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #181a1b;
    color: #fff;
  }

  img { 
    max-width: 100%;
  }

`;

export default GlobalStyle;
