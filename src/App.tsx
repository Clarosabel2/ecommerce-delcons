import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetailPage";
import Auth from "./pages/Auth"
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path='/auth' element={<Auth/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<CheckoutPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
