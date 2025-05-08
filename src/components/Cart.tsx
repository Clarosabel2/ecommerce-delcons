import React, { useRef, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

export default function Cart() {
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 500);
    };
    return (
        <div
            className="relative flex"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CiShoppingCart className="mr-1 text-4xl" />
            <div className="absolute flex items-center justify-center w-full h-full">
                1
            </div>

            {isHovered && (
                <div className="absolute right-0 z-50 w-64 p-4 mt-2 transition-all duration-300 scale-95 bg-white shadow-xl opacity-0 cursor-default top-full rounded-xl animate-fade-in">
                    <p className="mb-2 font-semibold text-gray-700">
                        Tu carrito
                    </p>
                    <div className="text-sm text-gray-600">
                        <p>Producto 1 - $100</p>
                        <p>Producto 2 - $200</p>
                    </div>
                    <div>
                        <p>Total: $300</p>
                    </div>
                </div>
            )}
        </div>
    );
}
