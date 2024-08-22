import React from "react";
import styled from "styled-components";

const Item = ({ imageSrc, title, description }) => {
  return (
    <>
      <ItemWrapper>
        <Image src={imageSrc} alt={title} />
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

const Image = styled.img`
  border: 1px solid #ccc;
  height: 100px;
`;

export default Item;
