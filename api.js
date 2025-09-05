import axios from "axios";

const api = "https://api.artic.edu/api/v1/artworks";

export async function fetchArtworks() {
  try {
    // Previous solution
    // const response = await axios.get(api);
    // return response.data.data;

    // Array of request results
    const requests = [];
    const amountOfPages = 5;

    // Fetch first X pages
    for (let i = 1; i < amountOfPages + 1; i++) {
      requests.push(axios.get(`${api}?page=${i}&limit=20`));
    }

    const responses = await Promise.all(requests);
    return responses.flatMap((response) => response.data.data);
  } catch (error) {
    console.error("Error fetching artworks:", error);
    return [];
  }
}
