import styled from "styled-components";
import image0 from "../assets/homepage_images/gianni_dova.png";
import image1 from "../assets/homepage_images/test.png";

export function Home() {
  return (
    <>
      <Main>
        <ContentWrapper>
          <EmptyDiv></EmptyDiv>
          <BackgroundStyling>
            <TestImage src={image1} alt="Gianni Dova"></TestImage>
            <TransparentButton>BROWSE</TransparentButton>
            {/* <HomeCarousel /> */}
            {/* <img src={image0} alt="Gianni Dova" /> */}
          </BackgroundStyling>
        </ContentWrapper>
      </Main>
    </>
  );
}

const Main = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
`;

const TestImage = styled.img`
  width: 14rem;
`;

const TransparentButton = styled.p`
  font-size: 3rem;
  font-weight: bold;
  font-family: Helvetica, sans-serif;
  color: transparent;
  background: url(${image0}) no-repeat center;
  background-size: cover;
  -webkit-background-clip: text;
  background-clip: text;
`;

const EmptyDiv = styled.div`
  width: 50vw;
`;

const BackgroundStyling = styled.div`
  background-image: url(${image0});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 50vw;
`;
