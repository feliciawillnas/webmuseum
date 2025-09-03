import axios from "axios";

const api = "https://api.artic.edu/api/v1/artworks";

export async function fetchArtworks() {
  try {
    const response = await axios.get(api);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching artworks:", error);
    return [];
  }
}
