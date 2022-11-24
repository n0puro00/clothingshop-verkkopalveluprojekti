import './App.css';
import React, { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Navbar2 from './components/Navbar2';
import { useState } from 'react';
import Ostoskori from './pages/Ostoskori';
import Manage from './pages/Manage';


const URL = 'http://localhost/verkkopalveluprojekti2/Backend/';

function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
   if ('cart' in localStorage) {
     setCart(JSON.parse(localStorage.getItem('cart')));
   }
  }, [])

  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id ===product.id);
      updateAmount(parseInt(existingProduct[0].amount) + 1,product);
    } else {
      product['amount'] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    }
  }

  function updateAmount(amount,product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  

  return (
    <>
 
    <Navbar2 url={URL} cart={cart} />

    <div className='container'>

    <Header /> 

    <Navbar url={URL} />

    <Routes>
      <Route path="/" element={<Home url={URL} addToCart={addToCart}/>} />
      <Route path="/Home" element={<Home url={URL} addToCart={addToCart}/>} />
      <Route path="/product/:productId" element={<Products url={URL} addToCart={addToCart} />} />
      <Route path="/products/:categoryId" element={<Products url={URL} addToCart={addToCart} />} />
      <Route path="/Ostoskori" element={<Ostoskori cart={cart} removeFromCart={removeFromCart} />} />
      <Route path="/search/:searchPhrase" element={<Products url={URL}/>} />
      <Route path="/About/" element={<About />} />
      <Route path="/Manage/" element={<Manage />} />
    </Routes>

    </div>

    <Footer />

    </>
  );
  }
export default App;