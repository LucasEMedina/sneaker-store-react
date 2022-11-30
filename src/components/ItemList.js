import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <ul className="itemListUl">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};

export default ItemList;