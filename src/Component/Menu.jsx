import React, { useState } from 'react'
import MenuList from './MenuList'
import pizzaData from '../Asset/data'


const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = pizzaData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You searched for: "${searchTerm}"`);
  };
  return (
    <div className='pt-20  text-gray-50 bg-slate-800 h-lvh' >
      <h2 className='lap:text-3xl text-xl p-6  px-12 capitalize font-mono pb-2'>Search your favorite menu</h2> 
      <form onSubmit={handleSubmit}>
      <input className='w-56 mx-12  border-slate-50 border-2 rounded-xl bg-transparent mb-5 py-1 px-2 outline-none' type="text"
      placeholder='Search...'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} />
      </form>
      <div className='flex flex-wrap  pb-12 w-full h-fit justify-center bg-slate-800 gap-2'>
      {filteredItems.length > 0 ? (
          filteredItems.map((item, id) => {
            return <MenuList name={item.name} id={item.id} key={id} image={item.photoName} price={item.price} ingredients={item.ingredients}/>
})
        ) : (
          <p className='text-gray-100 text-4xl'>No results found.</p>
        )}
      {/* {pizzaData.map((item)=>{
          return <MenuList name={item.name} image={item.photoName} price={item.price} ingredients={item.ingredients}/>
        })} */}
      </div>
        
    </div>
  )
}

export default Menu