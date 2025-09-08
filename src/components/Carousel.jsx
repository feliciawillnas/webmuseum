import styled from "styled-components";
import collage_eight from "../assets/homepage_images/collage_eight.jpg";
import collage_eleven from "../assets/homepage_images/collage_eleven.jpg";
import collage_five from "../assets/homepage_images/collage_five.jpg";
import collage_four from "../assets/homepage_images/collage_four.jpg";
import collage_nine from "../assets/homepage_images/collage_nine.jpg";
import collage_one from "../assets/homepage_images/collage_one.jpg";
import collage_seven from "../assets/homepage_images/collage_seven.jpg";
import collage_six from "../assets/homepage_images/collage_six.jpg";
import collage_ten from "../assets/homepage_images/collage_ten.jpg";
import collage_thirteen from "../assets/homepage_images/collage_thirteen.jpg";
import collage_three from "../assets/homepage_images/collage_three.jpg";
import collage_twelve from "../assets/homepage_images/collage_twelve.jpg";
import collage_two from "../assets/homepage_images/collage_two.jpg";

export default function Carousel() {
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
    {
      id: 8,
      imgSrc: collage_eight,
    },
    {
      id: 9,
      imgSrc: collage_nine,
    },
    {
      id: 10,
      imgSrc: collage_ten,
    },
    {
      id: 11,
      imgSrc: collage_eleven,
    },
    {
      id: 12,
      imgSrc: collage_twelve,
    },
    {
      id: 13,
      imgSrc: collage_thirteen,
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
  align-items: baseline;
  flex-direction: row;

  overflow-x: scroll;

  img {
    width: calc(100% / 7);
    height: auto;
    object-fit: cover;
  }
`;
