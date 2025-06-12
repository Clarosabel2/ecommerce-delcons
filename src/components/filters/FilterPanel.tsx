import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Category from "../../models/Category";
import { getCategories } from "../../services/StoreApi";
import ListItem from "../product-details/ListItem";
import FilterContent from "./FilterContent";
import clsx from "clsx";

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
        <div className={clsx("sticky z-40 rounded-lg top-25",
            {"z-50":showMobile},
            {"z-20":!showMobile}
        )}>
            
            <div className="relative ">
                {/* Panel de filtros para desktop */}
                <div className="hidden lg:block">
                    <div className="p-4 bg-white shadow rounded-2xl">
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
        </div>
        </>
    );
}