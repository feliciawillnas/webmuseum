import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function GalleryDetail({ artworks }) {
  const { id } = useParams();

  const [isScaled, setIsScaled] = useState();

  const art = artworks.find(
    (selectedArtwork) => String(selectedArtwork.id) === id
  );

  //   const maxScale = art.height > art.width ? 1.15 : 1.3;

  //   const artContent = art.description;
  //   const cleanDescription = artContent.replace(/<\/?p>/g, "");
  //   console.log(cleanDescription;

  if (!art) return <p>Artwork not found.</p>;
  //   console.log(art);

  return (
    <>
      <Main>
        <ImageWrapper>
          <Test
            onClick={() => setIsScaled(!isScaled)}
            animate={{ scale: isScaled ? 1.3 : 1 }}
            src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
            alt={art.title}
          />
        </ImageWrapper>
        <h3>{art.title}</h3>
        <InformationWrapper>
          <div></div>
          <Information>
            <div>
              <h5>Artist</h5>
              <p>{art.artist_title}</p>
            </div>
            <div>
              <h5>Place of origin</h5>
              <p>{art.place_of_origin}</p>
            </div>
            <div>
              <h5>Date</h5>
              <p>{art.date_display}</p>
            </div>
            <div>
              <h5>Medium</h5>
              <p>{art.artwork_type_title}</p>
              <p>{art.medium_display}</p>
            </div>
            <div>
              <h5>Description</h5>
              <p>{art.description}</p>
            </div>
          </Information>
        </InformationWrapper>
      </Main>
    </>
  );
}

const Main = styled.div`
  height: 100vh;
  overflow-x: scroll;

  h3 {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 0%;
  }
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

const Test = styled(motion.img)`
  cursor: zoom-in;
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
