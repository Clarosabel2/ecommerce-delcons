import React, { useEffect, useRef, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

const mockCartItems = [
    {
        id: 1,
        name: "Producto 1",
        price: 100,
        image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1776,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MMST080_SHOE_ANGLE_GLOBAL_MENS_TREE_RUNNER_MIST_WHITE_679b3a1c-ce52-4fd0-9307-b09638895d82.png?v=1717712458", // asegúrate de que esta ruta sea accesible en `public/images/`
    },
    {
        id: 2,
        name: "Producto 2",
        price: 200,
        image: "https://www.thehempshop.co.uk/media/catalog/product/cache/53255479565ca60bd805cf968bff78ae/b/l/blue_tshirt_7.jpg.mst.webp",
    },
    {
        id: 3,
        name: "Producto 3",
        price: 300,
        image: "https://acdn-us.mitiendanube.com/stores/556/398/products/jogger-6f639a4447b6b9cc1317260852341443-1024-1024.jpg",
    },
];

export default function Cart() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
            className="relative flex"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative flex">
                <CiShoppingCart className="mr-1 text-4xl" />
                <div className="absolute flex items-center justify-center w-full h-full">
                    1
                </div>
            </div>

            {isVisible && (
                <div
                    className={`absolute right-0 z-50 flex flex-col h-auto gap-2 p-2 mt-2 transition-all duration-300 bg-white shadow-2xl cursor-default w-80 top-full rounded-xl 
                    ${isHovered ? "animate-fade-in" : "animate-fade-out"}`}
                >
                    <div className="w-full">
                        <p className="mb-2 text-xl font-semibold text-center text-gray-700">
                            Tu carrito
                        </p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                        {mockCartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-around border-gray-300 border-t-1"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="object-contain h-24 rounded"
                                />
                                <p>
                                    {item.name} - ${item.price}
                                </p>
                                <button className="p-2 text-red-500 border cursor-pointer rounded-xl hover:text-red-700 hover:bg-gray-100">
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow">
                        <span className="font-semibold">Total:</span>
                        <span className="text-lg font-semibold">$300</span>
                    </div>
                </div>
            )}
        </div>
    );
}
