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
  return (
    <GalleryDiv>
      {items.map((item, index) => (
        <Item key={index}>
          <img src={item.imageSrc} alt={item.title} />
          {/* <h3>{item.title}</h3> */}
          {/* <p>{item.description}</p> */}
        </Item>
      ))}
    </GalleryDiv>
  );
}

const GalleryDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 9rem 2rem;
  justify-items: center;
  margin-bottom: 100px;
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
