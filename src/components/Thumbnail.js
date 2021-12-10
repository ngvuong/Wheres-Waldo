import React, { useContext } from "react";
import styled from "styled-components";
import { OptionsContext } from "../App";

function Thumbnail({ character, src }) {
  const options = useContext(OptionsContext);

  return (
    <StyledThumbnail options={options} character={character}>
      <img src={src} alt={character} />
      <div>
        {character === "Johnny" ? "Johnny Bravo" : character}
        <img src={src} alt={character} />
      </div>
    </StyledThumbnail>
  );
}

export default Thumbnail;

const StyledThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  width: clamp(2rem, 3vw, 5rem);
  height: clamp(2rem, 3vw, 5rem);
  border: 5px ridge red;
  margin: 0 0.2rem;
  opacity: ${({ options, character }) =>
    options.includes(character) ? 1 : 0.5};

  div {
    display: none;
    width: clamp(10rem, 7vw, 15rem);
    font-size: 1.5rem;
    text-align: center;
    background-color: #2a2e30;
    border-radius: 10px;
    box-shadow: 0 0 10px #2a2e30;
  }

  &:hover div {
    display: block;
  }

  div img {
    padding: 1rem;
  }
`;
