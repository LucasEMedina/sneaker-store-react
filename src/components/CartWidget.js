import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

const CartWidget = () => {
    return (
        <div className="cartWidget">
        <button className="btnCart"><FontAwesomeIcon icon={faCartShopping} className="iconCart"/></button>
        <span className="spanCart">0</span>
        </div>
    );
};

export default CartWidget;