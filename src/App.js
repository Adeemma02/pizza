
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Cont from './Page/cont';
import Men from './Page/Men';
import Error from './Page/Error';
import ShopContextProvider from './Context/ShopContext';
import Cart from './Page/Cart';



function App() {


  return (
    <>
    <ShopContextProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Men />}/>
      <Route path="/contact" element={<Cont />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="*" element={<Error />} />
    </Routes> 
    </BrowserRouter>
    </ShopContextProvider>
    </>
  );
}

export default App;
