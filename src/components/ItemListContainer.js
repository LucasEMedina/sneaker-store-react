import React from "react";


const producto1 = {
    nombre : "Nike Air Max 90",
    stock : 10,
    talle : 41,
    categoria : "Street",
    img : "https://woker.vtexassets.com/arquivos/ids/307957/4DH5075-100-1.jpg?v=637992964287230000",
    id : 1
}





const ItemListContainer =() => {
    return (
        <div className="containProducts">
            <div className="cardProducto">
                <img src={producto1.img} className="imgProduct"/>
                <h5 className="nameProduct">{producto1.nombre}</h5>
                <p className="parrafoProduct">Stock = {producto1.stock}</p>
                <h6 className="titlePares">Pares a comprar</h6>
                <div className="btnParesAgregados">
                    <button className="btnCantidadPar">-</button>
                    <span className="spanPares">1</span>
                    <button className="btnCantidadPar">+</button>
                </div>
                <button className="btnAgregarCarrito">AGREGAR AL CARRITO</button>
            </div>
        </div>
    );

};

export default ItemListContainer;