import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import Dashboard from "./pages/DashboardPage";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import ProtectedRoute from "./components/ProtectedRoute";

import AuthLayout from "./layouts/AuthLayout";

import PostLoginRedirect from "./pages/PostLoginRedirect";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

import { RolUser } from "./enums/RolUser";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/post-login" element={<PostLoginRedirect />} />

                <Route element={<AuthLayout/>}>
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                </Route>

                <Route element={<MainLayout/>}>
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
                            <ProtectedRoute requiredRole={RolUser.Admin}>
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
