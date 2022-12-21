import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';

const CartWidget = () => {
    const { carrito } = useContext(CartContext);

    return (
        <div className="cartWidgetContain">
            <Link to="/cart" className="linkcartWidget">
                <button className="btnCart"><FontAwesomeIcon icon={faCartShopping} className="iconCart" /></button>
                {carrito.length !== 0 ? (
                    <span className="spanCart">{carrito.length}</span>
                ) : ('')
                }
            </Link>
        </div>
    );
};

export default CartWidget;