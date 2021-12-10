import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0.1rem 0;
  background-color: ${({ theme }) => theme.colors.header};

  h1 {
    font-size: clamp(1rem, 2.5vw, 2rem);
  }
`;
