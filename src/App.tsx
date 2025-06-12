import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./pages/CartPage"
import ProductDetail from "./pages/ProductDetailPage"
import CheckoutPage from "./pages/CheckoutPage"
import Dashboard from "./pages/DashboardPage"

import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"


import ProtectedRoute from "./components/ProtectedRoute";

import AuthLayout from "./layouts/AuthLayout";


import PostLoginRedirect from "./pages/PostLoginRedirect";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";


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
