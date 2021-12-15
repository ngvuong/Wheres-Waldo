import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  width: 50vw;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.modal};
  border-radius: 10px;
  box-shadow: 0 0 10px #4f6363d6;

  button {
    margin: 1rem;
  }

  img {
    width: clamp(5rem, 7vw, 10rem);
  }

  @media screen and (max-width: 480px) {
    & {
      width: 80vw;
      height: 55vh;
    }
  }
`;
