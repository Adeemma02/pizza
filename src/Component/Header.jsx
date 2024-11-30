// import React, { useState } from 'react'
import { useContext } from 'react'
import logo from '../Asset/images/Pizza-Logo.png'
import cart from '../Asset/images/cart-removebg-preview (1).png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Header = () => {
    const {totalCartItems} = useContext(ShopContext)

  return (
    <div className='size-full bg-slate-900 h-14 px-4 py-3 flex fixed justify-between'>
    <img src={logo} className='h-full' alt='logo'/>
    <ul className='flex text-gray-300 max-w-52 justify-around min-w-48'>
        <li className='cursor-pointer hover:text-red-700 hover:border-b-2 hover:pb-2 hover:border-red-700 ease-out duration-1000'> 
        <Link to="/">Home</Link>
          {/* Home */}
          </li>
        <li className='cursor-pointer hover:text-red-700 hover:border-b-2 hover:pb-2 hover:border-red-700 ease-out duration-1000'>
        <Link to="/menu">Menu</Link>
          {/* Menu */}
          </li>
    </ul>
    <div className='h-full cursor-pointer w-12 relative'> <Link to='/cart'>
        <img src={cart} className='h-full w-10 text-white' alt="cart" />
        <div className='absolute -top-2 bg-red-700 rounded-full p-0 w-5 text-center  right-3 text-gray-100'>{totalCartItems()} </div>
        </Link>
    </div>
    </div>
  )
}

export default Header