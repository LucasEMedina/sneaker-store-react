import React from "react";
import { Link } from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <Link to="/cart">
                <button className="btnCart"><FontAwesomeIcon icon={faCartShopping} className="iconCart"/></button>
                <span className="spanCart">0</span>
            </Link>
        </div>
    );
};

export default CartWidget;