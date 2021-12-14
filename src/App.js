import React, { useState, useEffect } from "react";
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
  const [isGameStart, setIsGameStart] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  const onOptionsChange = (character) => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option !== character)
    );
  };

  useEffect(() => {
    if (!options.length) {
      setIsGameOver(true);
      setStartTimer(false);
      setOptions(["Jerry", "Johnny", "Groot"]);
    }
  }, [options]);

  const onStart = () => {
    setIsGameStart(true);
    setIsGameOver(false);
    setStartTimer(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {!isGameStart && <StartModal onClick={onStart} />}
        {isGameOver && <GameOverModal onRestart={onStart} />}
        <OptionsContext.Provider value={options}>
          <Header startTimer={startTimer} />
          <GameController options={options} onOptionsChange={onOptionsChange} />
        </OptionsContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
