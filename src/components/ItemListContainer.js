import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Own components
import ItemList from "./ItemList";

// Mock
import {items} from "../mocks/items.mock";

// Librerias
import Toastify from 'toastify-js';



const ItemListContainer =() => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      
      setProducts([]);

      return setTimeout(() => {
        resolve(items);
      }, 1000);
    }).then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-full">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;