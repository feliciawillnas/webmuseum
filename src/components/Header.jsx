import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Navigation } from "../components/Navigation";

export function Header() {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <Main>
      <Hover
        whileHover={{ scale: 1.2 }}
        onHoverStart={() => setShowHeader(true)}
        onHoverEnd={() => setShowHeader(false)}
      >
        <h1>Menu</h1>
        {/* Vad ska vara här */}
      </Hover>
      <AnimatePresence>
        {/* Stänga direkt när man klickat på en li */}
        {showHeader && (
          <HiddenHeader
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HeaderItems
              onHoverStart={() => setShowHeader(true)}
              onHoverEnd={() => setShowHeader(false)}
            >
              <Navigation />
            </HeaderItems>
          </HiddenHeader>
        )}
      </AnimatePresence>
    </Main>
  );
}

const Main = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Hover = styled(motion.div)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
`;

const HiddenHeader = styled(motion.div)`
  backdrop-filter: blur(10px);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

const HeaderItems = styled(motion.div)`
  width: fit-content;
`;
