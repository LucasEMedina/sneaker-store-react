import React from "react";

import { useFireItems } from "../hooks/useFireItems";

import ItemList from "./ItemList";
import { Loading } from "./Loader";


const ItemListContainer = () => {
    
  const items = useFireItems();

  if (!items) {
    return <Loading />;
  }

  
  return (
    <div className="h-full">
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;