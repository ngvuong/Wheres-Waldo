import styled from "styled-components";

function TargetBox({ mousePosition }) {
  return <StyledTargetBox position={mousePosition} />;
}

export const StyledTargetBox = styled.div`
  width: 5vw;
  height: 5vw;
  background-color: black;
  position: absolute;
  top: ${({ position }) => `calc(${position[1]}px - 2.5vw)`};
  left: ${({ position }) => `calc(${position[0]}px - 2.5vw)`};
`;

export default TargetBox;
