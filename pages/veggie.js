import GlobalStyle from "./components/global-style";
import { Background } from ".";
import Image from "next/image";
export default function Veggie() {
  return (
    <>
      <h2>Veggie Page</h2>;
      <Background>
        <Image
          src=""
          alt="bild"
          layout="responsive"
          width={2400}
          height={1800}
        />
      </Background>
    </>
  );
}
