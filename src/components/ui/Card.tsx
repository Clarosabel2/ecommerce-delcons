import React from "react";
import Product from "../../models/Product";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import RatingStar from "../product-details/RatingStar";
import { useCart } from "../../hooks/useCart";
import { Item } from "../../models/Cart";
import ImageZoomShadow from "./ImageZoomShadow";

type Props = {
    product: Product;
};

export default function Card({ product }: Props) {
    const navigate = useNavigate();
    const { cart, addItem } = useCart();


    const existingItem = cart.items.find((i) => i.product.id === product.id);

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div
            className="overflow-hidden transition-all duration-300 bg-white shadow-sm cursor-pointer group rounded-2xl hover:shadow-xl active:shadow-none"
            onClick={handleClick}
        >
            {/* Imagen y badge de descuento */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}

                    className="object-contain w-full h-full p-4 transition-all duration-300 
                    drop-shadow-[0px_4px_2px_rgba(0,0,0,0.9)]
                    group-hover:drop-shadow-[0px_3px_13px_rgba(33,33,33,0.6)]
                    group-hover:scale-110
                    "
                    />

                {product.discountPercentage && (
                    <span className="absolute px-2 py-1 text-xs font-bold text-white bg-green-500 rounded-full top-2 right-2">
                        {product.discountPercentage}% OFF
                    </span>
                )}
            </div>

            {/* Información del producto */}
            <div className="p-4">
                {/* Categoría y marca */}
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 capitalize">
                        {product.category.name}
                    </span>
                    {product.brand && (
                        <span className="text-xs font-medium text-gray-700">
                            {product.brand}
                        </span>
                    )}
                </div>

                {/* Nombre del producto */}
                <h3 className="mb-2 text-sm font-semibold text-gray-800 line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                    <RatingStar
                        rate={product.rating.rate}
                        className="text-xs"
                    />
                    <span className="text-xs text-gray-500">
                        ({product.rating.count})
                    </span>
                </div>

                {/* Precio y stock */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900">
                            ${product.price}
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">
                                Stock: {product.stock}
                            </span>
                            {existingItem && (
                                <span className="text-xs font-medium text-blue-600">
                                    En carrito: {existingItem.quantity}
                                </span>
                            )}
                        </div>
                    </div>
                    <button
                        className="p-2 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={(e) => {
                            e.stopPropagation();
                            addItem(new Item(1, product));
                            
                        }}
                        disabled={existingItem?.quantity === product.stock}
                    >
                        <FaCartPlus className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
