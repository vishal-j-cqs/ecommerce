import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
 
const getDefaultCart = () =>{
    let cart = {};
    for(let i = 0; i < all_product.length; i++){
        cart[i] = 0
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const [cartItem, setCartItem] = useState(getDefaultCart)

    const contextValue = {all_product, cartItem};
    console.log(cartItem, 'cartitems')
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;

