import React from "react";
import { CiShoppingCart } from "react-icons/ci";

export default function Cart() {
    return (
        <div className="relative flex">
            <CiShoppingCart className="mr-1 text-4xl" />
            <div className="absolute flex items-center justify-center w-full h-full">
                1
            </div>
        </div>
    );
}
