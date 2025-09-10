import { motion } from "framer-motion";
import { useState } from "react";

import styled from "styled-components";
import { Navigation } from "../components/Navigation";

export function Header() {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      <Main>
        <Hover
          whileHover={{ scale: 1.2 }}
          onHoverStart={() => setShowHeader(true)}
          onHoverEnd={() => setShowHeader(false)}
        >
          Hover
        </Hover>
        <HiddenHeader
          initial={{ opacity: 0 }}
          animate={showHeader ? { opacity: 1 } : { opacity: 0 }}
        >
          <HeaderItems
            onHoverStart={() => setShowHeader(true)}
            onHoverEnd={() => setShowHeader(false)}
          >
            <Navigation />
          </HeaderItems>
        </HiddenHeader>
      </Main>
    </>
  );
}

const Main = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Hover = styled(motion.div)``;

const HiddenHeader = styled(motion.div)`
  backdrop-filter: blur(10px);
  height: 100vh;
  width: 100vw;
`;

const HeaderItems = styled(motion.div)``;
