import React, { useState } from "react";
import CategoryProduct from "./CategoryProduct";
import { FaStar } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type Props = {
    categorySelect: string[];
    setCategorySelect: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function FilterPanel({
    categorySelect,
    setCategorySelect,
}: Props) {
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [showMobile, setShowMobile] = useState(false);

    return (
        <div className="relative">
            {/* Botón móvil para mostrar filtros */}
            <button
                className="fixed z-30 flex items-center justify-center p-4 text-white transition-colors rounded-full shadow-lg bottom-20 right-4 lg:hidden bg-slate-800 hover:bg-slate-700"
                onClick={() => setShowMobile(!showMobile)}
            >
                <FaFilter className="w-5 h-5" />
            </button>

            {/* Panel de filtros */}
            <div

                className={`fixed bg-white lg:relative top-0 left-0 h-screen w-full lg:w-auto lg:bg-transparent z-40 transform transition-transform duration-300 ease-in-out bg-wh 
                ${
                    showMobile
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                }`}
            >
                <div className="h-full overflow-y-auto lg:h-auto">
                    <div className="p-6 bg-white rounded-lg lg:shadow-md">
                        {/* Cabecera móvil */}
                        <div className="flex items-center justify-between mb-6 lg:hidden">
                            <h2 className="text-xl font-bold">Filtros</h2>
                            <button
                                onClick={() => setShowMobile(false)}
                                className="p-2 text-gray-500 rounded-full hover:bg-gray-100"
                            >
                                <IoMdClose />
                            </button>
                        </div>

                        {/* Filtro por categoría */}
                        <div className="mb-8">
                            <h3 className="mb-4 text-lg font-semibold text-slate-800">
                                Categorías
                            </h3>
                            <div className="space-y-2">
                                <CategoryProduct />
                            </div>
                        </div>

                        {/* Filtro por precio */}
                        <div className="mb-8">
                            <h3 className="mb-4 text-lg font-semibold text-slate-800">
                                Precio
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-slate-600">
                                        Min: ${priceRange[0]}
                                    </span>
                                    <span className="text-sm text-slate-600">
                                        Max: ${priceRange[1]}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={priceRange[0]}
                                    onChange={(e) =>
                                        setPriceRange([
                                            parseInt(e.target.value),
                                            priceRange[1],
                                        ])
                                    }
                                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200"
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={priceRange[1]}
                                    onChange={(e) =>
                                        setPriceRange([
                                            priceRange[0],
                                            parseInt(e.target.value),
                                        ])
                                    }
                                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200"
                                />
                            </div>
                        </div>

                        {/* Filtro por valoración */}
                        <div className="mb-8">
                            <h3 className="mb-4 text-lg font-semibold text-slate-800">
                                Valoración
                            </h3>
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <label
                                        key={rating}
                                        className="flex items-center space-x-2 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded text-slate-600"
                                        />
                                        <div className="flex items-center">
                                            {Array.from({ length: rating }).map(
                                                (_, index) => (
                                                    <FaStar
                                                        key={index}
                                                        className="text-yellow-400"
                                                    />
                                                )
                                            )}
                                            <span className="ml-2 text-sm text-slate-600">
                                                y más
                                            </span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex space-x-3">
                            <button className="flex-1 px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-slate-800 hover:bg-slate-700">
                                Aplicar filtros
                            </button>
                            <button className="px-4 py-2 text-sm font-medium transition-colors rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200">
                                Limpiar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
