import React, { useContext } from "react";
import styled from "styled-components";
import { OptionsContext } from "../App";

function Thumbnail({ character }) {
  const options = useContext(OptionsContext);
  return (
    <StyledThumbnail options={options} character={character}>
      {character}
    </StyledThumbnail>
  );
}

export default Thumbnail;

const StyledThumbnail = styled.div`
  width: clamp(2rem, 3vw, 5rem);
  height: clamp(2rem, 3vw, 5rem);
  border: 5px ridge red;
  margin: 0 0.5rem;
  opacity: ${({ options, character }) =>
    options.includes(character) ? 1 : 0.5};
`;
