import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";

const theme = {
  colors: {
    header: "#2a2e30",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Image />
      </>
    </ThemeProvider>
  );
}

export default App;
