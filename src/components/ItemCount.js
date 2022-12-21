import React from "react";

export const ItemCount = ({ count, decrease, increase }) => {
    return (
        <div className="btnParesAgregados">
            <button onClick={decrease} className="btnCantidadPar">-</button>
            <span className="spanPares">{count}</span>
            <button onClick={increase} className="btnCantidadPar">+</button>
        </div>
    );
};