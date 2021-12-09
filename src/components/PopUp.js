import styled from "styled-components";

function PopUp({ message }) {
  return <StyledPopUp>{message}</StyledPopUp>;
}

const StyledPopUp = styled.div`
  /* width: 10vw; */

  position: fixed;
  top: 10vh;
  left: 50%;
  background-color: red;
`;

export default PopUp;
