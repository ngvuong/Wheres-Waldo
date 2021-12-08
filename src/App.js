import React from "react";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";
import image from "./assets/113.jpg";

const theme = {
  colors: {
    header: "#ffcc20",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          <img src={image} alt="Universe 113" />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
