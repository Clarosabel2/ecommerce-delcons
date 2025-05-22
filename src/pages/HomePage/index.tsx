import React from "react";
import Header from "../../components/ui/Header";
import Main from "../../components/ui/Main";
import Footer from "../../components/ui/Footer";

export default function index() {
    return (
        <div className="w-full h-screen text-black scroll-smooth">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
