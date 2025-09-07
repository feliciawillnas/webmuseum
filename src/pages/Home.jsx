import styled from "styled-components";
import image0 from "../assets/homepage_images/gianni_dova.png";

export function Home({ artworks }) {
  return (
    <>
      <Main>
        <EmptyDiv>
          {artworks.map((artwork) => (
            <img key={artwork.id} src={artwork.imageUrl} alt={artwork.title} />
          ))}
        </EmptyDiv>
        <BackgroundStyling></BackgroundStyling>
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
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
