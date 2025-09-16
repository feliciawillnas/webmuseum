import { useState } from "react";
import styled from "styled-components";

export default function Filter({ artworks, onCategoryChange }) {
  const [showFilters, setShowFilters] = useState(false);

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
        <h5 onClick={() => setShowFilters((prev) => !prev)}>
          Filter by category
        </h5>
        {showFilters && (
          <ul>
            {categories.map((category) => (
              <CategoryItem
                key={category}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </CategoryItem>
            ))}
            <li onClick={() => onCategoryChange(null)}>Clear</li>
          </ul>
        )}
      </Main>
    </>
  );
}

const Main = styled.div`
  padding: 1rem;
  margin-top: 1.5rem;

  h5 {
    cursor: pointer;
    font-size: 22px;
  }

  li {
    font-size: 22px;
  }
`;

const CategoryItem = styled.li`
  margin-left: 1.5rem;
  font-size: 22px;
  cursor: pointer;
`;
