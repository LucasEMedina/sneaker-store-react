import React from "react";
import { useNavigate } from "react-router-dom";

//Librerias
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ product }) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  return (
    <div
      onClick={handleNavigate}
      className="divContainerCard"
    >
      <div className="flex flex-col flex-1">
        <img
          src={product.img}
          className="imageProduct"
          alt="Product"
        />
        <h4 className="text-2xl font-bold nameProduct">
          {product.name}
        </h4>
        <hr className="mb-2" />
        <p className="mb-2">
          {product.detalleCorto}
        </p>
      </div>
      <div className="flex flex-col">
        <hr className="mb-2" />
        <div className="flex justify-between items-center">
          <h5 className="font-bold">${product.price}</h5>
          <h6 className="text-xs">In Stock: {product.stock}</h6>
        </div>
      </div>
    </div>
  );
};

export default Item;