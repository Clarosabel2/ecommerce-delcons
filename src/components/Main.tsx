import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllProducts } from "../service/StoreApi";
import FilterPanel from "./FilterPanel";
import { OrbitProgress } from "react-loading-indicators";
import CartPhone from "./Cart/CartPhone";
import Pagination from "./Pagination";

export default function Main() {
    const [products, setProducts] = useState([]);
    const [categorySelect, setCategorySelect] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setProducts(await getAllProducts());
            } catch (error) {
                setLoading(false);
                console.error("Error cargando productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categorySelect]);

    return (
        <div className="min-h-screen bg-gray-50">
            {loading ? (
                <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
                    <OrbitProgress
                        color="#2896b9"
                        size="medium"
                        text=""
                        textColor=""
                    />
                </div>
            ) : products.length > 0 ? (
                <div className="container px-4 py-8 mx-auto">
                    {/* Header de la tienda */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Nuestra Tienda</h1>
                        <p className="mt-2 text-gray-600">Encuentra los mejores productos al mejor precio</p>
                    </div>

                    <div className="flex flex-col gap-6 lg:flex-row">
                        {/* Panel de filtros */}
                        <aside className="w-full lg:w-1/4">
                            <div className="sticky z-50 p-4 bg-white rounded-lg shadow-sm top-4">
                                <FilterPanel
                                    categorySelect={categorySelect}
                                    setCategorySelect={setCategorySelect}
                                />
                            </div>
                        </aside>

                        {/* Grid de productos */}
                        <main className="w-full lg:w-3/4">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {products.map((product) => (
                                    <div className="transition-transform duration-300 hover:-translate-y-1">
                                        <Card product={product} />
                                    </div>
                                ))}
                            </div>

                            {/* Paginación (opcional) */}
                            <Pagination currentPage={1} totalPages={3} onPageChange={() => {}}></Pagination>
                        </main>
                    </div>

                </div>
            ) : (
                <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-900">No hay productos disponibles</h2>
                        <p className="mt-2 text-gray-600">Intenta con otros filtros o vuelve más tarde</p>
                    </div>
                </div>
            )}
            <CartPhone />
        </div>
    );
}
