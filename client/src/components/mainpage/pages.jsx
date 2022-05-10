import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../mainpage/products/Products";
import Cart from "../mainpage/cart/Cart";
import Login from "../mainpage/auth/Login";
import Register from "../mainpage/auth/Register";
import WishList from "./wish/WishList";
import NotFound from "./utils/not_found/NotFound";

const pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="wish-list" element={<WishList />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default pages;
