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
      <Information>
        <h3>{art.title}</h3>
      </Information>
      <ImageWrapper>
        <img
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
          alt={art.title}
        />
      </ImageWrapper>
      <Information>
        <p>{art.artist_display}</p>
        <p>{art.place_of_origin}</p>
        {/* <p>{art.description}</p> */}
      </Information>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-items: center;
`;

const ImageWrapper = styled.div`
  img {
    max-width: 400px;
    height: auto;
  }
`;

const Information = styled.div`
  h3 {
    font-size: 2rem;
    text-align: center;
  }

  p {
  }
`;
