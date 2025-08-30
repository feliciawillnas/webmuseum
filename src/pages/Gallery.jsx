import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { useDimension } from "../hooks/useDimension";

export function Gallery() {
  const items = [
    {
      imageSrc: "../assets/tree.jpeg",
      title: "First Item",
      description: "This is the description for the first item.",
    },
    {
      imageSrc: "../assets/tree.jpeg",
      title: "First Item",
      description: "This is the description for the first item.",
    },
    {
      imageSrc: "../assets/tree.jpeg",
      title: "First Item",
      description: "This is the description for the first item.",
    },
    {
      imageSrc: "../assets/tree.jpeg",
      title: "First Item",
      description: "This is the description for the first item.",
    },
    {
      imageSrc: "../assets/tree.jpeg",
      title: "First Item",
      description: "This is the description for the first item.",
    },
    {
      imageSrc: "../assets/tree.jpeg",
      title: "First Item",
      description: "This is the description for the first item.",
    },
    {
      imageSrc: "../assets/tree.jpeg",
      title: "First Item",
      description: "This is the description for the first item.",
    },
    {
      imageSrc: "../assets/tree.jpeg",
      title: "First Item",
      description: "This is the description for the first item.",
    },
    {
      imageSrc: "../assets/tree.jpeg",
      title: "First Item",
      description: "This is the description for the first item.",
    },
    {
      imageSrc: "../assets/tree.jpeg",
      title: "First Item",
      description: "This is the description for the first item.",
    },
  ];

  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);

  return (
    <GalleryDiv ref={container}>
      <Column items={items} y={y} />
      <Column items={items} y={y2} />
      <Column items={items} y={y3} />
      <Column items={items} y={y4} />
      <Column items={items} y={y5} />
    </GalleryDiv>
  );
}
// {items.map((item, index) => (
//   <Item key={index}>
//     <img src={item.imageSrc} alt={item.title} />
//     {/* <h3>{item.title}</h3> */}
//     {/* <p>{item.description}</p> */}
//   </Item>
// ))}

const Column = ({ items, y = 0 }) => {
  return (
    <motion.div style={{ y }}>
      {items.map((item, index) => (
        <ColumnWrapper>
          <Item key={index}>
            <img src={item.imageSrc} alt={item.title} />
          </Item>
        </ColumnWrapper>
      ))}
    </motion.div>
  );
};

const GalleryDiv = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 9rem 2rem;
  /* overflow: hidden; */
  display: flex;
  justify-items: center;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  & > div:first-child {
    position: relative;
    top: -300px;
  }

  & > div:nth-child(2) {
    position: relative;
    top: -300px;
  }

  & > div:nth-child(3) {
    position: relative;
    top: -300px;
  }

  & > div:nth-child(4) {
    position: relative;
    top: -300px;
  }

  & > div:nth-child(5) {
    position: relative;
    top: -300px;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.div`
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 8px;

  img {
    width: 120px;
    height: auto;
    border-radius: 20px;
  }
`;
