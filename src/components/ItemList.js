import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <ul className="itemListUl">
      {products.map((product, index) => (
        <Item product={product} key={index}/>
      ))}
    </ul>
  );
};

export default ItemList;