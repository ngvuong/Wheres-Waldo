import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  width: 30vw;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.modal};
`;
