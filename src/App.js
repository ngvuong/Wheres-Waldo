import React from "react";
import Header from "./components/Header";
import GameController from "./components/GameController";
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
        <GameController />
      </>
    </ThemeProvider>
  );
}

export default App;
