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
    <>
      <ImageWrapper>
        <img
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
          alt={art.title}
        />
      </ImageWrapper>
      <InformationWrapper>
        <h3>{art.title}</h3>
        <Information>
          <div>
            <h5>Artist</h5>
            <p>{art.artist_display}</p>
          </div>

          <div>
            <h5>Place of origin</h5>
            <p>{art.place_of_origin}</p>
          </div>
          <div>
            <h5>Medium</h5>
            <p>{art.medium_display}</p>
          </div>
          <div>
            <h5>Description</h5>
            <p>{art.description}</p>
          </div>
        </Information>
      </InformationWrapper>
    </>
  );
}

const Test = styled.div`
  height: 100vh;
`;

const InformationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50vh;
  /* justify-items: center; */
  /* align-items: center; */

  h3 {
    margin-right: 200px;
    text-align: center;
    padding: 0rem 3rem 3rem 3rem;
  }
`;

const ImageWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 400px;
    height: auto;
  }
`;

const Information = styled.div`
  margin-left: 200px;
  /* margin-top: 50vh; */
  padding: 0rem 3rem 3rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
