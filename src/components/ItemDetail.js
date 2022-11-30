import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Librerias
import 'bootstrap/dist/css/bootstrap.min.css';
import Toastify from 'toastify-js';

const ItemDetail = ({item}) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
      
  const decrease = () => {
      if (count >= 1) {
          setCount(count - 1);            
      }
  }

  const increase = () => {
      if (count < item.stock) {
          setCount(count + 1);
      }
  }

  const agregarAlCarrito = () => {

      if (item.stock > 0) {
          Toastify({
              text: "Producto agregado al carrito!",
              duration: 1000,
              style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
              }
          }).showToast(); 
      } else {
          Toastify({
              text: "No hay Stock del producto!",
              duration: 1000,
              style: {
                  background: 'rgb(245, 56, 56)',
              }
          }).showToast();
      }

      item.stock = item.stock - count;
      
  }

  function verCarrito() {
    navigate("/cart");
  }
  

  return (
      <div className="containProducts">
          <div className="cardProducto">
              <img src={item.img} className="imgProduct" alt={item.name}/>
              <div className="detailProduct">
                <h5 className="nameProduct">{item.name}</h5>
                <p className="descriptProduct">{item.description}</p>
                
                <h6 className="titlePares">Pares a comprar</h6>
                <div className="btnParesAgregados">
                    <button onClick={decrease} className="btnCantidadPar">-</button>
                    <span className="spanPares">{count}</span>
                    <button onClick={increase} className="btnCantidadPar">+</button>
                </div>
                <p className="stockProduct">Stock = {item.stock}</p>
                <button onClick={agregarAlCarrito} className="btn btn-primary btnAgregarCarrito"> AGREGAR AL CARRITO </button>
                <button onClick={verCarrito} className="btn btn-primary btnAgregarCarrito"> VER CARRITO </button>
              </div>
          </div>
      </div>
  );

};
  
  export default ItemDetail;