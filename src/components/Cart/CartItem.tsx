import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../hooks/userCart";
import { Item } from "../../models/Cart";


interface CartItemProps {
    item: Item;
}

export default function CartItem({ item }: CartItemProps) {
    const { cart, addItem, removeItem } = useCart();
    return (
        <div
            key={item.id}
            className="flex items-center justify-around gap-2 px-4 py-1 border-gray-300 border-t-1"
        >
            <p>{item.id}</p>
            <section className="">
                <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="object-contain w-20 h-16 rounded max-w-24"
                />
            </section>
            <section className="flex flex-col w-full">
                <p className="line-clamp-1">
                    <strong>{item.product.name}</strong>
                </p>
                <div className="ml-2 text-xs">
                    <p>Cantidad: {item.quantity}</p>
                    <p>Subtotal: ${item.subtotal}</p>
                </div>
            </section>
            <button
                className="p-2 text-red-500 border cursor-pointer rounded-xl hover:text-red-700 hover:bg-gray-100"
                onClick={() => removeItem(item.product.id)}
            >
                <FaTrash />
            </button>
        </div>
    );
}
