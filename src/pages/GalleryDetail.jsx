import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function GalleryDetail({ artworks }) {
  const { id } = useParams();
  console.log(id);

  const art = artworks.find(
    (selectedArtwork) => String(selectedArtwork.id) === id
  );

  if (!art) return <p>Artwork not found.</p>;

  return (
    <Main>
      <ImageWrapper>
        <img
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
          alt={art.title}
        />
      </ImageWrapper>
      <Information>
        <h3>{art.title}</h3>
        {/* <p>{art.place_of_origin}</p> */}
        <p>{art.artist_display}</p>
        {/* <p>{art.description}</p> */}
      </Information>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    max-width: 400px;
    height: auto;
  }
`;

const Information = styled.div`
  position: absolute;
  top: 50%;
  left: calc(50% + 250px);
  transform: translateY(-50%);

  h3 {
    font-size: 2rem;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
  }
`;
