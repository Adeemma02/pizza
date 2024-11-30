import React, { useContext } from 'react'
import {  FaTrash } from 'react-icons/fa'
import { ShopContext } from '../Context/ShopContext'

const CartItem = (props) => {
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
  return (
    <div className=' tablet:gap-6 laptop:px-10 p-4 sm:w-[280px]  gap-2  '>
        <div className='w-full bg-slate-900 flex justify-between'>
        <div>
        <div className="flex    laptop:h-[160px] h-[130px] rounded-lg">
        <img src={props.image} alt="img" className='laptop:h-[160px] h-[130px] w-[120px] laptop:w-[140px]' />
        <div className="flex flex-col justify-evenly pl-3">
            <p className='font-extrabold laptop:text-xl'>{props.name}</p>
            <p className='laptop:text-lg'>₦ {props.price}</p>
            <p className='lap:text-sm'>Delivery Time: 15 mins</p>
            </div>
        </div>
        </div>
        <div className='flex laptop:pr-14 items-center laptop:w-52 lap:w-28 pr-4 justify-between'>
            <button
             className=" rounded-full  w-7 text-white text-center cursor-pointer text-xl"
             onClick={()=>{addToCart(props.id)}}>+</button>
            <input
             type="text" 
             value={cartItems[props.id]}
             onChange={(e)=> updateCartItemCount(Number(e.target.value), props.id) }
              className='w-6 text-black bg-slate-300 rounded-sm text-center' />
            <button 
            className=" rounded-full  w-7 text-white text-center cursor-pointer text-xl"
            onClick={()=>{removeFromCart(props.id)}}>-</button>
            {/* <FaTrash className='text-red-900 cursor-pointer text-xl' /> */}
        </div>
        </div>
    </div>
  )
}

export default CartItem