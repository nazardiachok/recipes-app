import Head from "next/head";
import Image from "next/image";
import GlobalStyle from "./components/global-style";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes App</title>
      </Head>
      <Background>
        {/*    <Image
          src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg"
          alt="bild"
          layout="responsive"
          width={2400}
          height={1800}
        /> */}
      </Background>
      <h1></h1>
    </>
  );
}

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;

  @media (max-width: 600px) {
    display: none;
  }
`;
