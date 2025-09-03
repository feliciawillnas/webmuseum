import { useRef } from "react";
import styled from "styled-components";
import first from "../assets/first.jpg";
import fourth from "../assets/fourth.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";

import { motion, useScroll, useTransform } from "framer-motion";

export function Shop() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <Section ref={sectionRef}>
      <Main>
        <ItemWrapper>
          <ParallaxImage
            src={first}
            alt=""
            speed={0.3}
            scrollYProgress={scrollYProgress}
          />
        </ItemWrapper>
        <ItemWrapper>
          <ParallaxImage
            src={second}
            alt=""
            speed={0.3}
            scrollYProgress={scrollYProgress}
          />
        </ItemWrapper>
        <ItemWrapper>
          <ParallaxImage
            src={third}
            alt=""
            speed={0.3}
            scrollYProgress={scrollYProgress}
          />
        </ItemWrapper>
        <ItemWrapper>
          <ParallaxImage
            src={fourth}
            alt=""
            speed={0.3}
            scrollYProgress={scrollYProgress}
          />
        </ItemWrapper>
      </Main>
      <BlankSpace />
    </Section>
  );
}

const ParallaxImage = ({ src, alt, speed = 0.3, scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 1000]);

  return <StyledParallaxImage src={src} alt={alt} style={{ y }} />;
};

const Section = styled.div`
  position: relative;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
`;

const ItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

const StyledParallaxImage = styled(motion.img)`
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  scale: 1.9;
`;

const BlankSpace = styled.div`
  height: 50vh;
  background: #111;
`;
