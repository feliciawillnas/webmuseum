import styled from "styled-components";
import collage_five from "../assets/homepage_images/collage_five.jpg";
import collage_four from "../assets/homepage_images/collage_four.jpg";
import collage_one from "../assets/homepage_images/collage_one.jpg";
import collage_seven from "../assets/homepage_images/collage_seven.jpg";
import collage_six from "../assets/homepage_images/collage_six.jpg";
import collage_three from "../assets/homepage_images/collage_three.jpg";
import collage_two from "../assets/homepage_images/collage_two.jpg";

export function Home() {
  return (
    <>
      <Collage>
        <img src={collage_one} alt="" />
        <img src={collage_two} alt="" />
        <img src={collage_three} alt="" />
        <img src={collage_four} alt="" />
        <img src={collage_five} alt="" />
        <img src={collage_six} alt="" />
        <img src={collage_seven} alt="" />
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
