import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import AnimatedLink from "./AnimatedLink";
import Cart from "./Cart/CartComponent";

export default function Header() {
    const location = useLocation();
    const isCheckout = location.pathname === "/checkout";
    const navegate = useNavigate();
    const handleClick = (page: string) => {
        navegate(page);
    };
    return (
        <div className="pb-20">
            <div className="fixed z-10 flex items-center justify-between w-full p-4 mb-5 bg-white shadow-xl">
                <nav className="flex items-center justify-between w-full px-4">
                    <div
                        className="rounded px-[2rem] hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                        onClick={() => handleClick("/")}
                    >
                        <Logo></Logo>
                    </div>
                    <div>
                        <ul className="flex items-center justify-center gap-2">
                            {!isCheckout && (
                                <li className="hidden lg:block">
                                    <Cart />
                                </li>
                            )}
                            <li>
                                <AnimatedLink href="/auth">
                                    Sign In
                                </AnimatedLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
