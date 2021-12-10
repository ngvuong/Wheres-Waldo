import React, { useState, useRef, useEffect } from "react";
import StartModal from "./components/StartModal";
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

  const onOptionsChange = (character) => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option !== character)
    );
  };

  useEffect(() => {
    console.log(ref.current);
    if (!options.length) {
      ref.current.style.display = "flex";
      setOptions(["Jerry", "Johnny", "Groot"]);
    }
  }, [options]);

  const ref = useRef(null);
  const onClick = () => {
    ref.current.style.display = "none";
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StartModal onClick={onClick} ref={ref} />
        <OptionsContext.Provider value={options}>
          <Header />
          <GameController options={options} onOptionsChange={onOptionsChange} />
        </OptionsContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
