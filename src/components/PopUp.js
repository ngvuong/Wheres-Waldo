import styled from "styled-components";

function PopUp({ message }) {
  return <StyledPopUp message={message}>{message}</StyledPopUp>;
}

const StyledPopUp = styled.div`
  font-size: clamp(1rem, 2vw, 2rem);
  position: fixed;
  top: clamp(3rem, 7vw, 6rem);
  left: 45%;
  background-color: ${({ message }) =>
    message.includes("not") ? "#cc0000" : "#00bb00"};
`;

export default PopUp;
