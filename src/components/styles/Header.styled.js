import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 0.1rem 0;
  background-color: ${({ theme }) => theme.colors.header};

  h1 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    margin-left: 1vw;
  }

  & > div {
    display: flex;
  }
`;
