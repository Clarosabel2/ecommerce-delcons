import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../hooks/userCart";
import { Item } from "../../models/Cart";
import QuantitySelector from "../QuantitySelector";
import NumberFlow from "@number-flow/react";

interface CartItemProps {
    item: Item;
}

export default function CartItem({ item }: CartItemProps) {
    const { cart, addItem, removeItem } = useCart();
    return (
        <div
            key={item.id}
            className="flex items-center justify-around gap-2 px-4 pt-1 font-light border-gray-300 border-t-1"
        >
            <p className="text-xs font-extralight ">{item.id}</p>
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
                    <p>
                        Cantidad:
                        <NumberFlow value={Number(item.quantity.toFixed(2))} />
                    </p>
                    <p>
                        Subtotal: $
                        <NumberFlow value={Number(item.subtotal.toFixed(2))} />
                    </p>
                </div>
            </section>
            <div>
                {item.quantity !== 1 ? (
                    <QuantitySelector
                        value={item.quantity}
                        onChange={(value) => addItem(new Item(value, item.product))}
                    />
                ) : (
                    <button
                        className="p-2 text-red-500 border cursor-pointer rounded-xl hover:text-red-700 hover:bg-gray-100"
                        onClick={() => removeItem(item.product.id)}
                    >
                        <FaTrash />
                    </button>
                )}
            </div>
        </div>
    );
}
