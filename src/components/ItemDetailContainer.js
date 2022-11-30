import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

import { items } from "../mocks/items.mock";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(items.find((item) => item.id === id)), 1000)).then(
      (data) => setItem(data)
    );
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;