import React from "react";
import { useFireItems } from "../hooks/useFireItems";

import ItemDetail from "./ItemDetail";
import { Loading } from "./Loader";


const ItemDetailContainer = () => {
  const item = useFireItems();
  
  if (!item) {
    return <Loading/>;
  }

  return (
    
    <ItemDetail item={item} />
    
  );
};

export default ItemDetailContainer;