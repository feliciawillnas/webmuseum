import React from "react";
import Item from "../components/Item";

export function Shop() {
  const items = [
    {
      imageSrc: "../assets/tree.jpeg",
      title: "First Item",
      description: "This is the description for the first item.",
    },
  ];
  return (
    <>
      <div>
        {items.map((item, index) => (
          <Item
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
