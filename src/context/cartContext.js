import React, { useState, createContext } from "react";


export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    console.log(carrito)

    function addItem(item, cantidad) {
        if (isInCart(item.id)) {
            setCarrito(carrito.map(product => {
                return product.id === item.id ?
                    { ...product, cantidad: product.cantidad + cantidad } : product
            }));
        } else {

            setCarrito((prevState) => prevState.concat({ ...item, cantidad }));
        }

    }

    const totalPrice = () => {
        return carrito.reduce((prev, act) => prev + act.cantidad * act.price, 0);
    }

    function isInCart(itemId) {
        return carrito.some((product) => product.id === itemId);
    }

    const removeItem = (itemId) => setCarrito(carrito.filter(product => product.id !== itemId))
    
    function clear() {
        setCarrito([]);
    }


    return (
        <CartContext.Provider
            value={{ addItem, removeItem, clear, isInCart, totalPrice, carrito }}>

            {children}

        </CartContext.Provider>
    );
};

