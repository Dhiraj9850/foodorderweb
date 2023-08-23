import React, { createContext,useState,useContext  } from "react";


const CartContext =  createContext();

export const CartProvider =({children})=>{
    const [cartItems, setCartItems] = useState([]);

    const addToCart=(item)=>{
       setCartItems([...cartItems,item]);
    };

    const contextValue ={
        cartItems,
        addToCart
    };

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCartContext = ()=>useContext(CartContext);