import React, { createContext, useState } from 'react'
import pizzaData from '../Asset/data';

export const ShopContext = createContext(null)

const setDefaultCart = ()=>{
    let cart = {};
    for (let i =1; i < pizzaData.length + 1; i++){
        cart[i] = 0
    } return cart;
}

const ShopContextProvider = (props) => {
const [cartItems, setCartItems] = useState(setDefaultCart());

const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for (const item in cartItems){
        if(cartItems[item]>0){
            let  itemInfo = pizzaData.find((product)=> product.id === Number(item))
            totalAmount += cartItems[item] * Number(itemInfo.price) 
        }
    }
    return totalAmount;
}

const totalCartItems = ()=>{
    let totalItem = 0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem += cartItems[item]
        }
    } return totalItem;
}
const addToCart = (itemId)=>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))

    console.log(cartItems)
}
const removeFromCart = (itemId)=>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
}
const updateCartItemCount = (newAmount, itemId) =>{
    setCartItems((prev)=>({...prev, [itemId]: newAmount}))
}

const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, totalCartItems}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
 
}

export default ShopContextProvider