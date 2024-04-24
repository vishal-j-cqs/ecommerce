import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
 
const getDefaultCart = () =>{
    let cart = {};
    for(let i = 0; i < all_product.length+1; i++){
        cart[i] = 0
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const [cartItem, setCartItem] = useState(getDefaultCart)
   
    
    const addToCart = (itemId) =>{
        setCartItem((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem)
    }
    const removeToCart = (itemId) =>{
        setCartItem((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
        
    }

    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItem) {
            if(cartItem[item]>0){
                let iteminfo = all_product.find((product) =>product.id === Number(item))
                    totalAmount += (iteminfo.new_price * cartItem[item])*20;
            }        
        }
        return totalAmount
    }

const getTotalCartItem = ( ) => {
    let totalItem = 0;
    for(const item in cartItem){
        if(cartItem[item]>0){
            totalItem += cartItem[item]
        }
    }
    return totalItem;
}
    const contextValue = {all_product, cartItem, addToCart,removeToCart,getCartAmount,getTotalCartItem};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;

