import React, { useEffect, useRef, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import Product from "../models/Product";
import Cart, { Item } from "../models/Cart";
import Category from "../models/Category";
import Rating from "../models/Rating";

const mockProducts = [
    new Product(
        1,
        "MacBook Air",
        123,
        "",
        new Category(1, "Electronic"),
        "https://http2.mlstatic.com/D_NQ_NP_2X_801112-MLA46516512347_062021-T.webp",
        new Rating(2, 2)
    ),
    new Product(
        2,
        "Tablet",
        1230,
        "",
        new Category(1, "Electronic"),
        "https://i.blogs.es/6dbb45/captura-de-pantalla-2024-12-11-a-las-8.41.12/650_1200.png",
        new Rating(2, 2)
    ),
    new Product(
        3,
        "IPhone 16 Pro Max",
        3423,
        "",
        new Category(1, "Electronic"),
        "https://dcdn-us.mitiendanube.com/stores/001/097/819/products/iphone_16_ultramarine_pdp_image_position_1__en-in_6c707cad-991a-4cce-826c-15a71885ee62-81e0147d8e9e16643e17298216142643-640-0.png",
        new Rating(2, 2)
    ),
];

const mockItems = [
    new Item(1, 2, mockProducts[0]), // 2 Laptops
    new Item(2, 3, mockProducts[1]), // 3 Smartphones
    new Item(3, 1, mockProducts[2]), // 1 Tablet
];

export default function CartComponent() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [cart] = useState(new Cart(mockItems));

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
                    {cart.items.length}
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
                        {cart.items.length === 0 ? (
                            <p className="text-center">
                                No hay productos en el carrito.
                            </p>
                        ) : (
                            cart.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-around border-gray-300 border-t-1"
                                >
                                    <section>
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            className="object-contain w-20 h-16 rounded max-w-24"
                                        />
                                    </section>
                                    <section className="flex flex-col w-full">
                                        <p><strong>{item.product.name}</strong></p>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>Subtotal: {item.subtotal}</p>
                                    </section>
                                    <button className="p-2 text-red-500 border cursor-pointer rounded-xl hover:text-red-700 hover:bg-gray-100">
                                        <FaTrash />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="flex items-center justify-between w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow">
                        <span className="font-semibold">Total:</span>
                        <span className="text-lg font-semibold">
                            $ {cart.amount}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
