import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Cart from "./page/shopping-cart";
import Checkout from "./page/checkout";
import ProductPage from "./page/product-page";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/list" replace />} />
        <Route path="/list" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
