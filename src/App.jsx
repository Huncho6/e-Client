import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Container from './components/Container';
import NewBalance from './pages/NewBalance';
import Nike from './pages/Nike';
import Yeezy from './pages/Yeezy';
import Footer from './pages/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <>
      <NavBar cartItems={cartItems} removeFromCart={removeFromCart}  /> 
      <Container  />
      <Nike  addToCart={addToCart} />
      <NewBalance addToCart={addToCart} />
      <Yeezy addToCart={addToCart}  />
      <Footer />
    </>
  );
}

export default App;
