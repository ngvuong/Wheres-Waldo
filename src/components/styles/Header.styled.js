import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0.1rem 0;
  position: sticky;
  top: 0;
`;
