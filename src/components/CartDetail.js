import React, { useState } from "react";
//import { CartContextProvider } from "../context/CartContext";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

export const CartDetail = ({item}) => {
    return(
        <div className="cartDetail">
            <div className="flex text-center divContainCart">
                <h3>Carrito de Compras</h3>
                <div className="divDetailUl">
                    <ul className="row row-cols-4 gridCart1">
                        <li className="col-6 liDetailCart">Producto</li>
                        <li className="col-2 liDetailCart">Cantidad</li>
                        <li className="col-2 liDetailCart">Precio</li>
                        <li className="col-2 liDetailCart"></li>                        
                    </ul>
                </div>
                <div className="divDetailUl">
                    <ul className="row row-cols-4 gridCart2">
                        <li className="col-6 liDetailCart">Nombre del producto</li>
                        <li className="col-2 liDetailCart"><span>1</span></li>
                        <li className="col-2 liDetailCart">Price</li>
                        <li className="col-2 liDetailCart"><button className="trashIconButton"><FontAwesomeIcon icon={faTrashCan} className="trashIcon" /></button></li>
                    </ul>                    
                </div>
                <div className="totalDiv">
                    <p className="totalP">Total compra</p>
                    <p className="totalP"><span className="totalSpan">$ Total</span></p>
                </div>
                <div className="btnFooterCart">
                    <button className="btnClean btn btn-danger">Clean</button>
                    <button className="btnComprar btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    );
};