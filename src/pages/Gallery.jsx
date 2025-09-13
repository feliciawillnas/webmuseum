import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Gallery({ artworks }) {
  const container = useRef(null);

  const { scrollY } = useScroll();

  // higher number -> faster scroll
  const y = useTransform(scrollY, (v) => v * 0.2);
  const y2 = useTransform(scrollY, (v) => v * 0.4);
  const y3 = useTransform(scrollY, (v) => v * 0.5);
  const y4 = useTransform(scrollY, (v) => v * 0.1);
  const y5 = useTransform(scrollY, (v) => v * 0.6);

  // function for creating empty array
  function createEmptyArray() {
    return [];
  }

  const columns = Array.from({ length: 5 }, createEmptyArray);

  // distribute artworks evenly into columns by index
  artworks.forEach((artwork, index) => {
    const round = Math.floor(index / 5); // which "round" of distribution
    const column = index % 5; // which column

    // example: skip columns 1 and 3 on every *other* round
    if (round % 2 === 1 && (column === 2 || column === 4)) {
      return; // skip this placement
    }

    columns[column].push(artwork);
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
            <Item
              as={Link}
              to={`/gallery/${art.id}`}
              key={art.id}
              state={{ art }}
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                initial={{ filter: "blur(80px)" }}
                whileInView={{ filter: "none", delay: 0.1 }}
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
  flex-direction: row;
  margin-top: 1rem;
  padding: 1rem;
  justify-content: space-between;
  justify-items: center;
  /* position: relative; */

  /* Column div */
  div {
    display: flex;
    gap: 8rem;
    flex-direction: column;
  }
`;

const Item = styled(Link)`
  img {
    width: 10rem;
    height: auto;
    border-radius: 2px;
  }
`;
