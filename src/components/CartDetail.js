import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';


export const CartDetail = () => {
    const { removeItem, clear, totalPrice, carrito } = useContext(CartContext);
    const navigate = useNavigate();

    function checkCompra () {
        navigate("/checkView");
    };

    return (
        <div className="cartDetail">
            <div className="flex text-center divContainCart">
                {carrito.length === 0 ? (<>
                    <h2>No hay productos en el carrito!!</h2>
                    <Link to="/" className="btn btn-success">Hacer compras</Link>
                    </>
                ) : (<>
                    <h3>Carrito de Compras</h3>
                    <div className="divDetailUl">
                        <ul className="row row-cols-5 gridCart1">
                            <li className="col-6 liDetailCart">Producto</li>
                            <li className="col-1 liDetailCart">Cantidad</li>
                            <li className="col-2 liDetailCart">Precio</li>
                            <li className="col-2 liDetailCart"><strong>SubTotal</strong></li>
                            <li className="col-1 liDetailCart"></li>
                        </ul>
                    </div>
                    <div className="divDetailUl">
                        {carrito.map((product, index) => {
                            
                            return (
                                <ul key={index} className="row row-cols-5 gridCart2">
                                    <li className="col-6 liDetailCart">{product.name}</li>
                                    <li className="col-1 liDetailCart"><span>{product.cantidad}</span></li>
                                    <li className="col-2 liDetailCart">${product.price}</li>
                                    <li className="col-2 liDetailCart">${product.cantidad * product.price}</li>
                                    <li className="col-1 liDetailCart"><button onClick={() => removeItem(product.id)} className="trashIconButton"><FontAwesomeIcon icon={faTrashCan} className="trashIcon" /></button></li>
                                </ul>
                            );
                        })}
                    </div>

                    <div className="totalDiv">
                        <p className="totalP">Total compra</p>
                        <p className="totalP"><span className="totalSpan">${totalPrice()}</span></p>
                    </div>
                    <div className="btnFooterCart">
                        <button onClick={clear} className="btnClean btn btn-danger">Clean</button>
                        <button onClick={checkCompra} className="btnComprar btn btn-primary">Comprar</button>
                    </div>
                </>
                )}

            </div>
        </div>
    );
};