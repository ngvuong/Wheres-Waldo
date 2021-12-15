import styled from "styled-components";

function Button({ bg, onClick, children }) {
  return (
    <StyledButton onClick={onClick} bg={bg}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  font-size: 1.2rem;
  background: ${({ bg }) => bg};
  cursor: pointer;

  &:hover {
    border: 2px double black;
    transform: scale(1.2);
  }
`;
