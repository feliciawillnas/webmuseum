import { useParams } from "react-router-dom";

export default function GalleryDetail({ artworks }) {
  const { id } = useParams();
  console.log(id);
  console.log("id:", id, "type:", typeof id);
  console.log(
    "artworks id:",
    artworks.map((art) => art.id),
    "type:",
    typeof artworks.map((art) => art.id)
  );

  return (
    <div>
      <h3>title of artwork</h3>
    </div>
  );
}
