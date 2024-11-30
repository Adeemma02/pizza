import React from 'react'
import pizzaBg from '../Asset/images/pizza-b.png'
import { Link } from 'react-router-dom'



const Nav = () => {
  return (
    <div className='h-lvh bg-cover bg-no-repeat w-full py-16 px-6 tablet:px-24' style={{backgroundImage: `url(${pizzaBg})`}}>
    <div className=' flex items-center flex-col justify-center  tablet:pt-20 pt-32 px-2  sm:max-w-[400px] w-[350px] text-white' >
        <h2 className=' tablet:text-5xl font-extrabold text-4xl text-center tablet:text-left font-mono mb-4'>Welcome to <br /><span className='text-red-500'>AdeEmma Pizza</span></h2>
        <h3 className='tablet:text-3xl text-2xl font-semibold text-left mb-3'>-A slice of Happiness</h3>
        <p className='font-mono uppercase font-bold tablet:leading-6 text-xl text-center mb-7'>our menu has something for everyone. Whether you're craving a classic Margherita, a loaded Meat Lover’s, or a custom creation, we’ve got the perfect slice for you.</p>
        <div className="btn flex w-full tablet:justify-between justify-evenly">
            <button className='bg-red-700 py-2 px-3 rounded-xl cursor-pointer text-lg tracking-wide hover:bg-transparent hover:text-red-600 ease-in duration-300 uppercase'><Link to='/contact'>Contact Us</Link></button>
            <button className='bg-transparent py-2 px-3 rounded-xl cursor-pointer text-lg tracking-wide hover:bg-red-700 ease-in duration-300 uppercase'><Link to='/menu'>See the menu &rarr;</Link></button>
        </div>
        
    </div>

    </div>
  )
}

export default Nav