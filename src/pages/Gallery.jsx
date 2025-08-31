import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

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
  ];

  const container = useRef(null);
  // const { height } = useDimension();
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"],
  // });

  // const makeParallax = (scrollYProgress, speed) =>
  //   useTransform(scrollYProgress, (p) => p * window.innerHeight * speed);

  // const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  // const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  // const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  // const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  // const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);

  const { scrollY } = useScroll();

  // higher number -> faster scroll
  const y = useTransform(scrollY, (v) => v * 0.2);
  const y2 = useTransform(scrollY, (v) => v * 0.4);
  const y3 = useTransform(scrollY, (v) => v * 0.6);
  const y4 = useTransform(scrollY, (v) => v * 0.1);
  const y5 = useTransform(scrollY, (v) => v * 0.8);

  return (
    <FixedDiv>
      <GalleryDiv ref={container}>
        <Column items={items} y={y} />
        <Column items={items} y={y2} />
        <Column items={items} y={y3} />
        <Column items={items} y={y4} />
        <Column items={items} y={y5} />
      </GalleryDiv>
    </FixedDiv>
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
const FixedDiv = styled.div`
  /* height: 100vh; */
  /* padding: 5rem; */
  padding: 1rem;
`;
const GalleryDiv = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 9rem 2rem;
  /* overflow: hidden; */
  display: flex;
  justify-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    align-items: center;
  }

  & > div:first-child {
    position: relative;
    /* top: calc(-0.75 * 100vh); */
  }

  & > div:nth-child(2) {
    position: relative;
    /* top: calc(-2.05 * 100vh); */
  }

  & > div:nth-child(3) {
    position: relative;
    /* top: -300px; */
  }

  & > div:nth-child(4) {
    position: relative;
    /* top: -300px; */
  }

  & > div:nth-child(5) {
    position: relative;
    /* top: -300px; */
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
    width: 50%;
    height: auto;
    border-radius: 20px;
  }
`;
