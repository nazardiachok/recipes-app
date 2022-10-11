import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import GlobalStyle from "./global-style";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  margin: 0;
  padding: 1rem;
  min-height: calc(100vh - 8rem);
`;
