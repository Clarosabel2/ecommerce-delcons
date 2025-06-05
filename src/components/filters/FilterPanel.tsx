import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Category from "../../models/Category";
import { getCategories } from "../../services/StoreApi";
import ListItem from "../product-details/ListItem";

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
    const [categories, setCategories] = useState<Array<Category>>([]);

    // Cerrar el panel al hacer clic fuera de él en móvil
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const panel = document.getElementById("filter-panel");
            if (showMobile && panel && !panel.contains(event.target as Node)) {
                setShowMobile(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [showMobile]);

    // Prevenir scroll del body cuando el panel móvil está abierto
    useEffect(() => {
        if (showMobile) {
            document.body.style.overflow = "hidden";    
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [showMobile]);

    useEffect(() => {
        const fetchCategories = async () => {
          const categories = await getCategories();
          setCategories(categories);
          console.log(categories);
        };
      
        fetchCategories();
      }, []);

    const handleResetFilters = () => {
        setPriceRange([0, 1000]);
        setCategorySelect([]);
    };

    return (
        <>
            <div className="relative">
                {/* Panel de filtros para desktop */}
                <div className="hidden lg:block">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        {/* Contenido del panel para desktop */}
                        <FilterContent
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            categories={categories}
                            handleResetFilters={handleResetFilters}
                        />
                    </div>
                </div>
            </div>

            {/* Elementos móviles con portal */}
            <div className="lg:hidden">
                {/* Botón flotante */}
                <button
                    className="fixed flex items-center justify-center gap-2 px-4 py-3 text-white transition-colors rounded-lg shadow-lg bottom-20 right-4 bg-slate-800 hover:bg-slate-700"
                    onClick={() => setShowMobile(!showMobile)}
                    style={{ transform: "translateZ(0)" }}
                >
                    <FaFilter className="w-5 h-5"/>
                </button>

                {/* Overlay */}
                {showMobile && (
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-xs"
                        onClick={() => setShowMobile(false)}
                    />
                )}

                {/* Panel móvil */}
                <div
                    id="filter-panel"
                    className={`fixed top-0 right-0 h-screen w-[300px] transform transition-transform duration-300 ease-in-out bg-white rounded-l-3xl
                        ${showMobile ? "translate-x-0" : "translate-x-full"}`}
                    style={{
                        transform: `translateX(${
                            showMobile ? "0" : "100%"
                        }) translateZ(0)`,
                    }}
                >
                    <div className="h-full overflow-y-auto">
                        <div className="p-6">
                            {/* Cabecera móvil */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-slate-800">
                                    Filtros
                                </h2>
                                <button
                                    onClick={() => setShowMobile(false)}
                                    className="p-2 text-gray-500 transition-colors rounded-full hover:bg-gray-100"
                                >
                                    <IoMdClose className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Contenido del panel */}
                            <FilterContent
                                priceRange={priceRange}
                                setPriceRange={setPriceRange}
                                categories={categories}
                                handleResetFilters={handleResetFilters}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Componente interno para el contenido del filtro
const FilterContent = ({
    priceRange,
    setPriceRange,
    categories,
    handleResetFilters,
}: any) => {
    return (
        <>
            {/* Filtro por categoría */}
            <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-slate-800">
                    Categorías
                </h3>
                <div className="space-y-2 overflow-y-auto">
                    <ListItem items={categories} />
                </div>
            </div>

            {/* Filtro por precio */}
            <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-slate-800">
                    Precio
                </h3>
                <div className="space-y-1">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <span className="text-sm text-slate-600">Min:</span>
                            <input
                                type="number"
                                value={priceRange[0]}
                                onChange={(e) =>
                                    setPriceRange([
                                        Math.min(
                                            parseInt(e.target.value),
                                            priceRange[1]
                                        ),
                                        priceRange[1],
                                    ])
                                }
                                className="w-20 px-2 py-1 text-sm border rounded"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-600">Max:</span>
                            <input
                                type="number"
                                value={priceRange[1]}
                                onChange={(e) =>
                                    setPriceRange([
                                        priceRange[0],
                                        Math.max(
                                            parseInt(e.target.value),
                                            priceRange[0]
                                        ),
                                    ])
                                }
                                className="w-20 px-2 py-1 text-sm border rounded"
                            />
                        </div>
                    </div>
                    <div className="relative pt-1">
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
                            className="w-full h-2 mt-2 rounded-lg appearance-none cursor-pointer bg-slate-200"
                        />
                    </div>
                </div>
            </div>

            {/* Filtro por valoración */}
            <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-slate-800">
                    Valoración
                </h3>
                <div>
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <label
                            key={rating}
                            className="flex items-center p-2 space-x-2 transition-colors rounded-lg cursor-pointer hover:bg-slate-50"
                        >
                            <input
                                type="checkbox"
                                className="w-4 h-4 border-2 rounded text-slate-600 focus:ring-slate-500"
                            />
                            <div className="flex items-center">
                                {Array.from({ length: rating }).map(
                                    (_, index) => (
                                        <FaStar
                                            key={index}
                                            className="w-4 h-4 text-yellow-400"
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
            <div className="flex gap-3 pb-16">
                <button className="flex-1 px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-900">
                    Aplicar filtros
                </button>
                <button
                    className="px-4 py-2 text-sm font-medium transition-colors rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300"
                    onClick={handleResetFilters}
                >
                    Limpiar
                </button>
            </div>
        </>
    );
};
