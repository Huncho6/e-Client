import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import NewBalance from "./pages/NewBalance";
import Nike from "./pages/Nike";
import Yeezy from "./pages/Yeezy";
import Footer from "./pages/Footer";

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
      <NavBar cartItems={cartItems} removeFromCart={removeFromCart} />
      <Routes>
        <Route path="nike" element={<Nike addToCart={addToCart} />} />
        <Route path="yeezy" element={<Yeezy addToCart={addToCart} />} />
        <Route
          path="newbalance"
          element={<NewBalance addToCart={addToCart} />}
        />
      </Routes>
      <Container />
      <Footer />
    </>
  );
}

export default App;
