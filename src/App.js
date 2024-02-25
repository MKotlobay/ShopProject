import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './components/Layout';
import Mens from './components/Mens';
import Womens from './components/Womens';
import BagsPacks from './components/BagsPacks';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';


function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([])
  const [newCardCart, setNewCardCart] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  // Cart
  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartProducts(storedCartProducts);
  }, []);

  // Array for localstorage
  const onButtonAdd = (id) => {
    const newProducts = [...cartProducts, id]
    setCartProducts(newProducts)
    localStorage.setItem('cartProducts', JSON.stringify([...cartProducts, id]))
  }

  // Array for appearing products at cart - Not saves
  const onButtonCardCart = (product) => {
    const updatedCardCart = [...newCardCart, product];
    setNewCardCart(updatedCardCart);
  }


  return (
    <div className="App">
      <Nav totalProducts={cartProducts.length} newCardCart={newCardCart} />
      <Routes>
        <Route path="/" element={<Layout />}> </Route>
        <Route path="/mens" element={<Mens products={products.men} addCart={onButtonAdd} cardAppear={onButtonCardCart} />}> </Route>
        <Route path="/womens" element={<Womens products={products.women} addCart={onButtonAdd} cardAppear={onButtonCardCart} />}> </Route>
        <Route path="/bags-packs" element={<BagsPacks products={products.bagsPacks} addCart={onButtonAdd} cardAppear={onButtonCardCart} />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
