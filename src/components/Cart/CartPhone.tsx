import React, { useState, useEffect } from "react";
import { useCart } from "../../hooks/userCart";
import { SlArrowUp } from "react-icons/sl";
import CartItem from "./CartItem";
import NumberFlow from "@number-flow/react";
import clsx from "clsx";

export default function CartPhone() {
    const { cart, isAddItem, hasItems } = useCart();
    const [expanded, setExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const toggleCart = () => setExpanded((prev) => !prev);

    useEffect(() => {
        if (hasItems) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
                setExpanded(false);
            }, 200); 
            return () => clearTimeout(timer);
        }
    }, [hasItems]);

    return (
        <div className={`pt-28 sm:pt-0`}>
            <div
                className={clsx(
                    "fixed w-full bg-white shadow-lg rounded-t-4xl cart-phone sm:hidden -bottom-20",
                    {
                        block: isVisible,
                        hidden: !isVisible,
                        "scale-up-vertical-top": hasItems,
                        "scale-down-vertical-bottom": !hasItems,
                    }
                )}
            >
                <header
                    className="flex items-center justify-between gap-3 px-10 py-2 pl-3"
                    onClick={toggleCart}
                >
                    <div className="flex items-baseline justify-center gap-3">
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
                            Total: $<NumberFlow value={cart.amount} />
                        </p>
                    </div>
                </header>
                <section
                    className={`flex flex-col px-4 py-3 transition-all duration-500 ${
                        expanded
                            ? "max-h-[60vh] overflow-y-auto pb-24"
                            : "max-h-[10vh] overflow-hidden pb-0"
                    }`}
                >
                    {cart.items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </section>
            </div>
        </div>
    );
}
