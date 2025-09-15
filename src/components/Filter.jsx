import { useState } from "react";
import styled from "styled-components";

export default function Filter({ artworks }) {
  const [showFilters, setShowFilters] = useState(true);

  const categories = [];

  artworks.forEach((art) => {
    if (art.category_titles) {
      art.category_titles.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    }
  });

  return (
    <>
      <Main>
        <h3 onClick={() => setShowFilters(true)}>Filter</h3>
        {showFilters && (
          <div>
            {categories.map((category) => (
              <div>{category}</div>
            ))}
          </div>
        )}
      </Main>
    </>
  );
}

const Main = styled.div`
  height: 10rem;
  padding: 1rem;
  margin-top: 5rem;
`;
