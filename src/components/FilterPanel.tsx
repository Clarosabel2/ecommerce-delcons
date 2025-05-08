import React from "react";
import CategoryProduct from "./CategoryProduct";

type Props = {
    categorySelect: string[];
    setCategorySelect: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function FilterPanel({
    categorySelect,
    setCategorySelect,
}: Props) {
    return (
        <div className="">
            {/* Filtro por categoría */}
            <div className="mb-6">
                <h3 className="mb-2 text-lg font-medium">Categorías</h3>
                <CategoryProduct/>
            </div>
        </div>
    );
}
