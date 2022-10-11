import "../styles/globals.css";
import Layout from "./components/layout";
import GlobalStyle from "./components/global-style";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
