import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/homePage/Home";
import ProductDetail from "./pages/productDetailPage/ProductDetailPage";
import Cart from "./pages/cart/CartPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";


import ProtectedRoute from "./components/ProtectedRoute";

import AuthLayout from "./pages/Auth/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Dashboard from "./pages/dashboard/DashboardPage";
import PostLoginRedirect from "./pages/PostLoginRedirect";
import MainLayout from "./layouts/MainLayout";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/post-login" element={<PostLoginRedirect />} />
                <Route
                    path="/auth/login"
                    element={
                        <AuthLayout>
                            <Login />
                        </AuthLayout>
                    }
                />
                <Route
                    path="/auth/register"
                    element={
                        <AuthLayout>
                            <Register />
                        </AuthLayout>
                    }
                />
                <Route element={<MainLayout></MainLayout>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route
                        path="/checkout"
                        element={
                            <ProtectedRoute>
                                <CheckoutPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    ></Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
