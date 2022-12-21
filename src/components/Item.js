import React from "react";
import { useNavigate } from "react-router-dom";

//Librerias
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ product }) => {
  const navigate = useNavigate();

  function navigateToProduct() {
    navigate(`/item/${product.id}`);
  }

    return (
      <div onClick={navigateToProduct} className="divContainerCard">

        <div className="cardContainImg">
          <img src={product.img} className="imgItem" alt={product.name}/>
        </div>

            <hr className="hrCard"/>

        <div className="flex flex-col flex-1">
          <h4 className="text-2xl font-bold nameProduct">
            {product.name}
          </h4>          
        </div>
        
          <hr className="hrCard"/>

        <div className="priceStockCard">          
          <h5 className="font-bold mb-0">${product.price}</h5>
          <h6 className="text-xs mb-0">In Stock: {product.stock}</h6>          
        </div>

      </div>
    );
};

export default Item;