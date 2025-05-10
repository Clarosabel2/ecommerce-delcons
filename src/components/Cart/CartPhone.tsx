import React, { useState } from "react";
import { useCart } from "../../hooks/userCart";
import { SlArrowUp } from "react-icons/sl";
import CartItem from "./CartItem";

export default function CartPhone() {
    const { cart } = useCart();
    const [expanded, setExpanded] = useState(false);
    const toggleCart = () => setExpanded((prev) => !prev);
    return (
        <div className="sticky block w-full transition-all duration-500 bg-white shadow-lg -bottom-20 rounded-t-4xl cart-phone sm:hidden">
            <header className="flex items-center gap-3 py-2 pl-3">
                <div
                    className="self-start p-2 bg-gray-300 rounded-full"
                    onClick={toggleCart}
                >
                    <SlArrowUp
                        className={`text-2xl transition-transform duration-300 ${
                            expanded ? "rotate-180" : ""
                        }`}
                    />
                </div>
                <h1 className="text-2xl text-center font-extralight">
                    Tu carrito
                </h1>
                <div className="flex items-center justify-center gap-5 ml-20 text-xs font-extralight">
                    <p>Items: {cart.items.length}</p>
                    <p>Total: $ {cart.amount.toFixed(2)}</p>
                </div>
            </header>
            <section
                className={`flex flex-col overflow-y-auto px-4 py-2 transition-all duration-500 ${
                    expanded ? "h-[60vh]" : "h-[10vh] overflow-hidden"
                }`}
            >
                {cart.items.map((item) => (
                    <CartItem item={item} />
                ))}
            </section>
        </div>
    );
}
