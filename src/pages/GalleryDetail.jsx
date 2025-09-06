import { useParams } from "react-router-dom";

export default function GalleryDetail({ artworks }) {
  const { id } = useParams();
  console.log(id);

  const art = artworks.find(
    (selectedArtwork) => String(selectedArtwork.id) === id
  );

  if (!art) return <p>Artwork not found.</p>;

  return (
    <div>
      <div>
        <h1>{art.title}</h1>
        <img
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/800,/0/default.jpg`}
          alt={art.title}
        />
      </div>
    </div>
  );
}
