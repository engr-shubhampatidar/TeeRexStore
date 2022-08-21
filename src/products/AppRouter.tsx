import React from 'react'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './page/cart';
import Checkout from './page/checkout';
import ProductPage from './page/product-page';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to="/list" replace />} />
                <Route path='/list' element={<ProductPage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter