import styled from "styled-components";

function Thumbnail({ character }) {
  return <StyledThumbnail>{character}</StyledThumbnail>;
}

export default Thumbnail;

const StyledThumbnail = styled.div`
  width: clamp(2rem, 3vw, 5rem);
  height: clamp(2rem, 3vw, 5rem);
  border: 5px ridge red;
  margin: 0 0.5rem;
`;
