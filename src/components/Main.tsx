import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllProducts } from "../services/StoreApi";
import FilterPanel from "./FilterPanel";
import { OrbitProgress } from "react-loading-indicators";
import CartPhone from "./Cart/CartPhone";
import Pagination from "./Pagination";
import { useCart } from "../hooks/userCart";

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
        <div className="z-50 min-h-screen bg-gray-50">
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
                        <h1 className="text-3xl font-bold text-gray-900">
                            Nuestra Tienda
                        </h1>
                        <p className="mt-2 text-gray-600">
                            Encuentra los mejores productos al mejor precio
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col w-full gap-10 lg:flex-row">
                            {/* Panel de filtros */}
                            <aside className="w-full lg:w-1/4">
                                <div className="sticky z-20 rounded-lg top-40">
                                    <FilterPanel
                                        categorySelect={categorySelect}
                                        setCategorySelect={setCategorySelect}
                                    />
                                </div>
                            </aside>

                            
                            <main className="w-full lg:w-3/4">
                                <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {products.map((product) => (
                                        <Card product={product} />
                                    ))}
                                </div>
                            </main>
                        </div>
                        {/* Paginación*/}
                        <div className="flex self-end justify-center w-full lg:w-3/4">
                            <Pagination
                                currentPage={1}
                                totalPages={3}
                                onPageChange={() => {}}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            No hay productos disponibles
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Intenta con otros filtros o vuelve más tarde
                        </p>
                    </div>
                </div>
            )}
            <CartPhone />
        </div>
    );
}
