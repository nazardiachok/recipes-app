import GlobalStyle from "./components/global-style";
import { Background } from ".";
import Image from "next/image";
export default function Dessert() {
  return (
    <>
      <h2>Dessert Page</h2>
      <Background>
        <Image
          src="/* ./public/brina.jpg */"
          alt="bild"
          layout="responsive"
          width={2400}
          height={1800}
        />
      </Background>
    </>
  );
}
