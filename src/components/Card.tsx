import React from "react";
import Product from "../models/Product";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import { FaCartPlus } from "react-icons/fa";
import RatingStar from "./RatingStar";

type Props = {
    product: Product;
};

export default function Card({ product }: Props) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };
    return (
        <div
            id={`product-${product.id}`}
            className="flex h-40 gap-2 p-4 overflow-hidden transition-all duration-300 ease-in-out cursor-pointer select-none rounded-2xl hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:shadow-sm group"
            onClick={handleClick}
        >
            {/* Imagen del producto */}
            <div className="flex items-center justify-center w-1/2">
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain transition-transform duration-300 ease-in-out h-36 max-h-48 group-hover:scale-110"
                />
            </div>

            {/* Información del producto */}
            <div className="flex flex-col w-1/2 pointer-events-none">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {product.name}
                </h3>
                <div className="flex items-center gap-1">
                    <RatingStar className="text-xs" rate={product.rating.rate} />
                    <span className="text-xs text-blue-500">({product.rating.count})</span> 
                </div>
                <p className="text-2xl font-medium text-center text-blue-500 mt-7">
                    ${product.price}
                </p>
            </div>
        </div>
    );
}
