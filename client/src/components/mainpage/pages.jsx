import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../mainpage/products/Products';
import Cart from '../mainpage/cart/Cart';
import Login from '../mainpage/auth/Login';
import WishList from './wish/WishList';
import NotFound from './utils/not_found/NotFound';
import Home from './home/Home';
import DetailsProduct from './products/DetailsProduct';

const pages = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/product" exact element={<Products />} />
      <Route path="/detail/:id" exact element={<DetailsProduct />} />
      <Route path="cart" exact element={<Cart />} />
      <Route path="login" exact element={<Login />} />
      <Route path="wish-list" exact element={<WishList />} />

      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
};

export default pages;
