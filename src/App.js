import React, { useState, useRef, useEffect } from "react";
import StartModal from "./components/StartModal";
import GameOverModal from "./components/GameOverModal";
import Header from "./components/Header";
import GameController from "./components/GameController";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";

const theme = {
  colors: {
    header: "#2a2e30",
    modal: "#4f6363d6",
    overlay: "#000000b3",
  },
};

export const OptionsContext = React.createContext([]);

function App() {
  const [options, setOptions] = useState(["Jerry", "Johnny", "Groot"]);
  const [isGameOver, setIsGameOver] = useState(false);
  const overlayRef = useRef(null);

  const onOptionsChange = (character) => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option !== character)
    );
  };

  useEffect(() => {
    if (!options.length) {
      // ref.current.style.display = "flex";
      setIsGameOver(true);
      setOptions(["Jerry", "Johnny", "Groot"]);
    }
  }, [options]);

  const onStart = () => {
    overlayRef.current.style.display = "none";
  };

  const onRestart = () => {
    setIsGameOver(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StartModal onClick={onStart} ref={overlayRef} />
        {isGameOver && <GameOverModal onRestart={onRestart} />}
        <OptionsContext.Provider value={options}>
          <Header />
          <GameController options={options} onOptionsChange={onOptionsChange} />
        </OptionsContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
