import styled from "styled-components";
import first from "../assets/first.jpg";
import fourth from "../assets/fourth.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";

import { motion, useScroll, useTransform } from "framer-motion";

export function Shop() {
  const ParallaxImage = ({ src, speed = 0.3 }) => {
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [0, 1000], [0, speed * 1000]);

    return <motion.img src={src} style={{ y }} />;
  };

  return (
    <>
      <Main>
        <ItemWrapper>
          <ParallaxImage src={first} alt="" speed={0.3} />
        </ItemWrapper>
        <ItemWrapper>
          <ParallaxImage src={second} alt="" speed={0.3} />
        </ItemWrapper>
        <ItemWrapper>
          <ParallaxImage src={third} alt="" speed={0.3} />
        </ItemWrapper>
        <ItemWrapper>
          <ParallaxImage src={fourth} alt="" speed={0.3} />
        </ItemWrapper>
      </Main>
    </>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
`;

const ItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;

  img {
    width: 100%;
    height: 120%;
    object-fit: cover;
  }
`;
