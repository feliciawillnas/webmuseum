import React from "react";
import styled from "styled-components";

const Item = ({ image, title, description }) => {
  return (
    <>
      <ItemWrapper>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </ItemWrapper>
    </>
  );
};

const ItemWrapper = styled.div`
  border: 1px solid #ccc;
  height: 100px;
`;

export default Item;
