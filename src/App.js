import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Trending from './components/Trending';
import Mens from './components/Mens';
import Womens from './components/Womens';
import BagsPacks from './components/BagsPacks';
import Nav from './components/Nav';
import FavoriteProducts from './components/FavoriteProducts';
import GiftCards from './components/GiftCards';
import StoreLocator from './components/StoreLocator';
import MyAccount from './components/MyAccount';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  // Fetch products data from JSON file
  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Load cart products from local storage
  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartProducts(storedCartProducts);
  }, []);

  // Load favorite products from local storage
  useEffect(() => {
    const storedFavoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
    setFavoriteProducts(storedFavoriteProducts);
  }, []);

  // Function to add a product to the cart
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

  // Function to add a product to favorites and cart
  const addToFavoritesAndCart = (product) => {
    const existingProduct = favoriteProducts.find((item) => item.id === product.id);
    if (!existingProduct) {
      // If the product is not in favorites, add it
      const newFavorite = [...favoriteProducts, { ...product }];
      setFavoriteProducts(newFavorite);
      localStorage.setItem('favoriteProducts', JSON.stringify(newFavorite));
      // Also add the product to the cart
      onButtonAdd(product);
    }
  };

  return (
    <div className="App">
      <Nav totalProducts={cartProducts.length} cartProducts={cartProducts} setCartProducts={setCartProducts} />
      <Routes>
        <Route path="/" element={<Layout onButtonAdd={onButtonAdd}/>} />
        <Route path="/mens" element={<Mens products={products.men} addCart={onButtonAdd} addFavorite={addToFavoritesAndCart} />} />
        <Route path="/womens" element={<Womens products={products.women} addCart={onButtonAdd} addFavorite={addToFavoritesAndCart} />} />
        <Route path="/bags-packs" element={<BagsPacks products={products.bagsPacks} addCart={onButtonAdd} addFavorite={addToFavoritesAndCart} />} />
        <Route path="/favorite-products" element={<FavoriteProducts addCart={onButtonAdd} />} />
        <Route path="/gift-card" element={<GiftCards />} />
        <Route path="/store-locator" element={<StoreLocator />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </div>
  );
}

export default App;
