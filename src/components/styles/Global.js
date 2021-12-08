import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
  }

  body {
    /* height: 100%; */
    margin: 0;
  }

  img { 
    max-width: 100%;
  }

`;

export default GlobalStyle;
