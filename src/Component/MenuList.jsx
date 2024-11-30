import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const MenuList = (props) => {
  const {addToCart, cartItems} = useContext(ShopContext)

  const cartAmount = cartItems[props.id]
  return (
    <div className=' tablet:gap-6  sm:w-[280px] '>
        <div className='flex lap:py-5 lap:h-fit  w-[340px] gap-2 h-[163px]'>
        <img src={props.image} className=' h-[160px] w-[140px]' alt='pizza-image'/>
        <div className='flex flex-col justify-between'>
        <p className='text-xl font-bold'>{props.name}</p>
        <div className='leading-4'>{props.ingredients} </div>
            <div className='bg-red-800 rounded-xl w-fit px-3'>₦ {props.price} </div>
            
        <button 
        className='bg-red-800 w-fit px-4 py-1 rounded-md cursor-pointer'
        onClick={()=>{addToCart(props.id)}}
        >Add to Cart {cartAmount > 0 && <>({cartAmount})</>}</button>
        </div>
        
        </div>
     </div>
  )
}

export default MenuList