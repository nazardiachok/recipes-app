import styled from "styled-components";
import GlobalStyle from "./global-style";

export default function Footer() {
  return (
    <StyledFooter>
      <p>FOOTER</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  border-top: 1px solid #0c2c4d;
  color: #0c2c4d99;
  background-color: var(--background-light);
  text-align: center;

  padding: 0 1rem;
  height: 4rem;
`;
