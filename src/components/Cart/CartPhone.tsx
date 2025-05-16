import React, { useState, useEffect } from "react";
import { useCart } from "../../hooks/userCart";
import { SlArrowUp } from "react-icons/sl";
import CartItem from "./CartItem";
import NumberFlow from "@number-flow/react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function CartPhone() {
    const { cart, isAddItem } = useCart();
    const [expanded, setExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const toggleCart = () => setExpanded((prev) => !prev);

    return (
        <div className="pt-28 lg:pt-0">
            <div
                className={clsx(
                    "fixed w-full bg-white shadow-lg rounded-t-4xl cart-phone lg:hidden -bottom-20 z-50"
                )}
            >
                <header
                    className="flex items-center justify-between gap-3 px-10 py-2 pl-3"
                    onClick={toggleCart}
                >
                    <div className="flex items-center justify-center gap-3">
                        <div className="self-start p-2 bg-gray-300 rounded-full">
                            <SlArrowUp
                                className={`text-2xl transition-transform duration-300 ${
                                    expanded ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                        <h1 className="text-2xl text-center font-extralight">
                            Tu carrito
                        </h1>
                    </div>
                    <div className="flex items-center justify-center gap-5 text-xs font-extralight">
                        <p>
                            Items: <NumberFlow value={cart.items.length} />
                        </p>
                        <p>
                            Total: $
                            <NumberFlow
                                value={Number(cart.amount.toFixed(2))}
                            />
                        </p>
                    </div>
                </header>
                <section
                    className={`flex flex-col px-4 py-3 transition-all duration-500 ${
                        expanded ? "h-[60vh]" : "h-[10vh]"
                    } overflow-hidden`}
                >
                    <div
                        className={`flex flex-col gap-2 ${
                            expanded ? "overflow-y-auto pb-24" : ""
                        }`}
                    >
                        {cart.items.length !== 0 ? (
                            <>
                                {cart.items.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                                <div className="sticky bottom-0 flex items-center justify-center w-full p-4 bg-white shadow-lg">
                                    <button
                                        className="w-full px-6 py-3 text-lg font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        onClick={() => navigate('/checkout')}
                                    >
                                        Finalizar compra
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full py-8 text-gray-500">
                                <p className="text-lg font-light">
                                    Tu carrito está vacío
                                </p>
                                <p className="text-sm font-light">
                                    Agrega algunos productos para comenzar
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
