import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllProducts } from "../service/StoreApi";
import FilterPanel from "./FilterPanel";

export default function Main() {
    /*Cuando necesitás guardar y modificar valores locales del componente (como formularios, toggles, arrays, contadores, etc.).*/
    const [products, setProducts] = useState([]);
    const [categorySelect, setCategorySelect] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    /*Cuando querés ejecutar algo en el "ciclo de vida" del componente, como:

    Llamadas a APIs (fetch)
    Suscripciones
    Lógica al montar o desmontar
    Reacciones a cambios de estado o props */

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const category =
                    categorySelect.length === 1 ? categorySelect[0] : null;
                const result = await getAllProducts();
                setProducts(result);
            } catch (error) {
                console.error("Error cargando productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categorySelect]);

    return (
        <div className="z-40 h-auto min-h-screen">
            {loading ? (
                <div>
                    <h1 className="mt-10 text-2xl font-bold text-center">
                        Cargando productos...
                    </h1>
                    <p className="mt-4 text-center">Por favor espera...</p>
                </div>
            ) : products.length > 0 ? (
                <div className="flex flex-col justify-between w-full px-5 lg:flex-row">
                    <div className="ml-10 w-[20%] hidden sm:block">
                        <FilterPanel
                            categorySelect={categorySelect}
                            setCategorySelect={setCategorySelect}
                        />
                    </div>
                    <div
                        className="w-full lg:w-[75%] grid  grid-rows-5 lg:gap-5 gap-2
                            md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
                    >
                        {products.map(
                            (p) => (console.log(p), (<Card product={p} />))
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="mt-10 text-2xl font-bold text-center">
                        No hay productos
                    </h1>
                    <p className="mt-4 text-center">
                        Intenta con otra categoría
                    </p>
                </div>
            )}
        </div>
    );
}
