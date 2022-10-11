import styled from "styled-components";
import GlobalStyle from "./global-style";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavigation>
        <Anchor>Startseite</Anchor>
        <Anchor>Produkte</Anchor>
        <Anchor>Kategorien</Anchor>
      </StyledNavigation>
    </StyledHeader>
  );
}

const Anchor = styled.a`
  color: var(--text-secondary);
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid black;
  background-color: var(--background-light);
`;

const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
`;
