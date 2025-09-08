import styled from "styled-components";
import collage_five from "../assets/homepage_images/collage_five.jpg";
import collage_four from "../assets/homepage_images/collage_four.jpg";
import collage_one from "../assets/homepage_images/collage_one.jpg";
import collage_seven from "../assets/homepage_images/collage_seven.jpg";
import collage_six from "../assets/homepage_images/collage_six.jpg";
import collage_three from "../assets/homepage_images/collage_three.jpg";
import collage_two from "../assets/homepage_images/collage_two.jpg";

export function Home() {
  const carousel = [
    {
      id: 1,
      imgSrc: collage_one,
    },
    {
      id: 2,
      imgSrc: collage_two,
    },
    {
      id: 3,
      imgSrc: collage_three,
    },
    {
      id: 4,
      imgSrc: collage_four,
    },
    {
      id: 5,
      imgSrc: collage_five,
    },
    {
      id: 6,
      imgSrc: collage_six,
    },
    {
      id: 7,
      imgSrc: collage_seven,
    },
  ];

  return (
    <>
      <Collage>
        {carousel.map((item) => (
          <img key={item.id} src={item.imgSrc} alt={`Collage ${item.id}`} />
        ))}
      </Collage>
    </>
  );
}

const Collage = styled.div`
  width: 100vw;
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-items: baseline;

  img {
    width: calc(100% / 7);
    height: auto;
    object-fit: cover;
  }
`;
