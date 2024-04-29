import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './components/Layout';
import Mens from './components/Mens';
import Womens from './components/Womens';
import BagsPacks from './components/BagsPacks';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import FavoriteProducts from './components/FavoriteProducts';
import GiftCards from './components/GiftCards';
import StoreLocator from './components/StoreLocator';
import MyAccount from './components/MyAccount';


function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  // Json
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

  // Favorite
  useEffect(() => {
    const storedFavoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
    setFavoriteProducts(storedFavoriteProducts);
  }, []);

  // Array for localstorage
  const onButtonAdd = (product) => {
    const existingProduct = cartProducts.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product already exists in the cart, increase its quantity by 1
      const updatedCartProducts = cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartProducts(updatedCartProducts);
      localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
    } else {
      // If the product is not in the cart, add it with quantity 1
      const newProducts = [...cartProducts, { ...product, quantity: 1 }];
      setCartProducts(newProducts);
      localStorage.setItem('cartProducts', JSON.stringify(newProducts));
    }
  };


  const onFavoriteAdd = (product) => {
    const existingProduct = favoriteProducts.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product already exists in favorites, do nothing
      return;
    } else {
      // If the product is not in favorites, add it
      const newFavorite = [...favoriteProducts, { ...product }];
      setFavoriteProducts(newFavorite);
      localStorage.setItem('favoriteProducts', JSON.stringify(newFavorite));
    }
  };

  return (
    <div className="App">
      <Nav totalProducts={cartProducts.length} cartProducts={cartProducts} setCartProducts={setCartProducts} />
      <Routes>
        <Route path="/" element={<Layout />}> </Route>
        <Route path="/mens" element={<Mens products={products.men} addCart={onButtonAdd} addFavorite={onFavoriteAdd} />}> </Route>
        <Route path="/womens" element={<Womens products={products.women} addCart={onButtonAdd} addFavorite={onFavoriteAdd} />}> </Route>
        <Route path="/bags-packs" element={<BagsPacks products={products.bagsPacks} addCart={onButtonAdd} addFavorite={onFavoriteAdd} />}> </Route>
        <Route path="/favorite-products" element={<FavoriteProducts addCart={onButtonAdd}/>}> </Route>
        <Route path="/gift-card" element={<GiftCards />}> </Route>
        <Route path="/store-locator" element={<StoreLocator />}> </Route>
        <Route path="/my-account" element={<MyAccount />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
