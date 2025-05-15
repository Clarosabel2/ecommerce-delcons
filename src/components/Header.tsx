import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "./Logo";
import AnimatedLink from "./AnimatedLink";
import Cart from "./Cart/CartComponent";

export default function Header() {
    const navegate = useNavigate();
    const handleClick = (page: string) => {
        navegate(page);
    };
    return (
        <div className="z-50 flex items-center justify-between p-4 mb-5 shadow-xl">
            <nav className="flex items-center justify-between w-full px-4">
                <div
                    className="rounded px-[2rem] hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                    onClick={() => handleClick("/")}
                >
                    <Logo></Logo>
                </div>
                <div>
                    <ul className="flex items-center justify-center gap-2">
                        <li className="hidden lg:block">
                            <AnimatedLink>
                                <Cart/>
                            </AnimatedLink>
                        </li>
                        <li>
                            <AnimatedLink href="/auth">
                                Sign In
                            </AnimatedLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
