import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";

//Librerias
import 'bootstrap/dist/css/bootstrap.min.css';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";


const ItemDetail = ({ item }) => {
    const navigate = useNavigate();
    const {addItem, carrito} = useContext(CartContext);
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(item.stock);
    const [img, setImg] = useState(item.img)
    
    
    function decrease () {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function increase () {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function onAddItem () {
        if (stock < count) {
            Toastify({
                text: "No hay Stock del producto!",
                duration: 1000,
                style: {
                    background: 'rgb(245, 56, 56)',
                }
            }).showToast();
            }
        else {
          setStock(stock - count);
          addItem(item, count);
          Toastify({
            text: "Producto agregado al carrito!",
            duration: 1000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
        }).showToast();
        }
      }

    function verCarrito() {
        navigate("/cart");
    }

    function selectImg (imgSmall) {
        setImg(imgSmall)
    }


    return (
        <div className="containProducts">            
            <div className="cardProduct">
                <div className="divImgProduct">
                    <div className="containImgBig">
                        <img id="imgFullBox" src={img} className="imgBig" alt={item.name}/>
                    </div>
                    <div className="containImgSmall">
                        <img src={item.img} className="imgSmall" onClick={() => selectImg(item.img)} alt={item.name}/>
                        <img src={item.img2} className="imgSmall" onClick={() => selectImg(item.img2)} alt={item.name}/>
                        <img src={item.img3} className="imgSmall" onClick={() => selectImg(item.img3)} alt={item.name}/>
                        <img src={item.img4} className="imgSmall" onClick={() => selectImg(item.img4)} alt={item.name}/>
                        <img src={item.img5} className="imgSmall" onClick={() => selectImg(item.img5)} alt={item.name}/>
                    </div>
                </div>
                <div className="detailProduct">
                    <h5 className="nameProduct">{item.name}</h5>
                    <p className="descriptProduct">{item.description}</p>
                    <span>Precio: <strong>${item.price}</strong></span>
                    {stock > 0 ? (<>
                        <h6 className="titlePares">Pares a comprar</h6>
                        <ItemCount count={count} increase={increase} decrease={decrease}></ItemCount>
                        <p className="stockProduct"><strong>Stock = {stock}</strong></p>
                        
                    
                    </>) : (<>
                    
                        <div className="sinStock">
                            <span>
                                <strong>
                                    Sin Stock del producto.
                                </strong>
                            </span>
                        </div>
                    </>
                    )}
                    <div className="btnContainDetail">
                    {stock > 0 ? (
                        <button onClick={onAddItem}  className="btn btn-primary btnAgregarCarrito"> AGREGAR AL CARRITO </button>
                        ) : ( '' ) } 

                    {carrito.length !== 0 ? (  
                        <button onClick={verCarrito} className="btn btn-success btnAgregarCarrito"> VER CARRITO </button>
                    ) : ( '' ) }
                    
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default ItemDetail;

/*if (item.stock > 0) {
            setCarrito([...carrito, {...item, cantidad}]);
            carrito.push(item)
            console.log(carrito)
            Toastify({
                text: "Producto agregado al carrito!",
                duration: 1000,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
            }).showToast();
        } else {
            console.log(carrito)
            Toastify({
                text: "No hay Stock del producto!",
                duration: 1000,
                style: {
                    background: 'rgb(245, 56, 56)',
                }
            }).showToast();
        }
    
        item.stock = item.stock - count;*/