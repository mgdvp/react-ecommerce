import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Category from './pages/Category';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row lg:flex-row">
        <div className="flex justify-between bg-gray-100 p-4 rounded-lg w-full md:w-1/3 lg:w-1/4 shadow-sm">
          <ul className="flex flex-col gap-2">
            <li><Link to="/category/tv" className='text-lg hover:text-purple-800'>Televizorlar</Link></li>
            <li><Link to="/category/mobile" className='text-lg hover:text-purple-800'>Smartfonlar</Link></li>
            <li><Link to="/category/audio" className='text-lg hover:text-purple-800'>Audio</Link></li>
            <li><Link to="/category/laptop" className='text-lg hover:text-purple-800'>Laptoplar</Link></li>
            <li><Link to="/category/gaming" className='text-lg hover:text-purple-800'>Gaming</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} addToCart={addToCart} />} />
          <Route path="/category/:id" element={<Category addToCart={addToCart} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
