import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

export default function index() {
    return (
        <div className="w-full h-screen text-black scroll-smooth">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
