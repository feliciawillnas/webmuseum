import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

export function Gallery({ artworks }) {
  const container = useRef(null);

  const { scrollY } = useScroll();

  // higher number -> faster scroll
  const y = useTransform(scrollY, (v) => v * 0.2);
  const y2 = useTransform(scrollY, (v) => v * 0.4);
  const y3 = useTransform(scrollY, (v) => v * 0.6);
  const y4 = useTransform(scrollY, (v) => v * 0.1);
  const y5 = useTransform(scrollY, (v) => v * 0.8);

  function createEmptyArray() {
    return [];
  }
  // const columns = Array.from({ length: 5 }, () => []);

  const columns = Array.from({ length: 5 }, createEmptyArray);

  // Distribute artworks evenly into columns by index
  artworks.forEach((artwork, index) => {
    columns[index % 5].push(artwork);
  });

  return (
    <GalleryDiv ref={container}>
      <Column items={columns[0]} y={y} />
      <Column items={columns[1]} y={y2} />
      <Column items={columns[2]} y={y3} />
      <Column items={columns[3]} y={y4} />
      <Column items={columns[4]} y={y5} />
    </GalleryDiv>
  );
}

const Column = ({ items, y = 0 }) => {
  return (
    <motion.div style={{ y }}>
      {items.map(
        (art) =>
          art.image_id && (
            <Item key={art.id}>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9, rotate: 2 }}
                src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
                alt={art.title}
              />
            </Item>
          )
      )}
    </motion.div>
  );
};

const GalleryDiv = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 1rem;

  /* Column div */
  div {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    align-items: center;
  }
`;

const Item = styled.div`
  img {
    width: 50%;
    height: auto;
    border-radius: 2px;
  }
`;
