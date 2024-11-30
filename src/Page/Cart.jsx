import React, { useContext } from 'react'
import Header from '../Component/Header'
import pizzaData from '../Asset/data'
import CartItem from '../Component/CartItem'
import { ShopContext } from '../Context/ShopContext'


const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
  return (
    <div className='bg-slate-800 h-lvh'>
        <Header />
        <div className='pt-20  text-gray-50 '>
            <h1 className='lap:text-3xl text-xl p-6  px-12 capitalize mb-6 font-mono pb-2'>Your Cart Items</h1>
            <div className='flex flex-wrap flex-col  pb-12 w-full h-fit justify-center bg-slate-800 gap-7 laptop:px-24'>
                {pizzaData.map((item, id) =>{
                if (cartItems[item.id] !==0){
                    return <CartItem id={item.id} name={item.name} key={id} image={item.photoName} price={item.price}/> 
                } return null
            })}</div> 
        </div>
        <div className="bg-slate-800 flex flex-col text-white pb-5 justify-center text-center">
            <p className='pb-5 text-2xl'>Total Amount:₦ {totalAmount}</p>
            <button className='cursor-pointer bg-red-800 py-2 px-4 rounded-lg text-lg w-fit mx-auto '>CHECK OUT</button>
        </div>
    </div>
  )
}

export default Cart