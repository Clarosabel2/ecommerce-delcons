import React, { useEffect, useRef, useState } from "react";

import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../../hooks/userCart";
import CartItem from "./CartItem";
import NumberFlow from "@number-flow/react";
import { useNavigate } from "react-router-dom";
import AnimatedLink from "../ui/AnimatedLink";

export default function CartComponent() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const { cart, isAddItem } = useCart();

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsHovered(true);
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
            timeoutRef.current = setTimeout(() => {
                setIsVisible(false);
            }, 200);
        }, 100);
    };


    return (
        <div
            className={`relative flex ${
                isAddItem ? "animate-vertical-bounce" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <AnimatedLink href="/cart">
                <div className="relative flex">
                    <CiShoppingCart className="mr-1 text-4xl" />
                    <div className="absolute flex items-center justify-center w-full h-full">
                        <NumberFlow value={cart.items.length} />
                    </div>
                </div>
            </AnimatedLink>

            {isVisible && (
                <div
                    className={`absolute right-0 z-50 flex flex-col h-auto gap-2 p-2 mt-2 transition-all duration-300 bg-white shadow-2xl cursor-default w-80 top-full rounded-xl border-1 border-gray-300 
                    ${isHovered ? "animate-fade-in" : "animate-fade-out"}`}
                >
                    <div className="w-full">
                        <p className="mb-2 text-xl font-semibold text-center text-gray-700">
                            Tu carrito
                        </p>
                    </div>
                    <div className="space-y-2 overflow-y-auto text-sm text-gray-600 max-h-72">
                        {cart.items.length === 0 ? (
                            <p className="text-center">
                                No hay productos en el carrito.
                            </p>
                        ) : (
                            cart.items.map((i) => (
                                <CartItem item={i}></CartItem>
                            ))
                        )}
                    </div>
                    <div className="flex items-center justify-between w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow">
                        <span className="font-semibold">Total:</span>
                        <span className="text-lg font-semibold">
                            $
                            <NumberFlow
                                value={Number(cart.amount.toFixed(2))}
                            />
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
