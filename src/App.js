import React, { useState, useEffect } from "react";
import StartModal from "./components/StartModal";
import GameOverModal from "./components/GameOverModal";
import Header from "./components/Header";
import GameController from "./components/GameController";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/firebase-config";

// Theme provider for common components
const theme = {
  colors: {
    header: "#2a2e30",
    modal: "#ffffff66",
    overlay: "#000000b3",
  },
};

// Context for passing character options
export const OptionsContext = React.createContext([]);

function App() {
  const [options, setOptions] = useState(["Jerry", "Johnny", "Groot"]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStart, setIsGameStart] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [time, setTime] = useState(0);
  // Filter out found characters
  const onOptionsChange = (character) => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option !== character)
    );
  };
  // Init firebase app
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);
  // Handle reset when all characters found
  useEffect(() => {
    if (!options.length) {
      setIsGameOver(true);
      setStartTimer(false);
      setTime(0);
      setOptions(["Jerry", "Johnny", "Groot"]);
    }
  }, [options]);
  // Grab time from timer to pass to endgame screen
  const getTime = (time) => {
    setTime(time);
  };

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
        {isGameOver && <GameOverModal onRestart={onStart} time={time} />}
        <OptionsContext.Provider value={options}>
          <Header startTimer={startTimer} getTime={getTime} />
          <GameController options={options} onOptionsChange={onOptionsChange} />
        </OptionsContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
