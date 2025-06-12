import React from "react";
import Header from "../components/ui/Header";
import Main from "../components/ui/Main";
import Footer from "../components/ui/Footer";
import AdminRedirector from "../auth/AdminRedirector";

export default function Home() {
    return (
        <>
            <AdminRedirector />
            <Main />
        </>
    );
}
