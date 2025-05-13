import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllProducts } from "../service/StoreApi";
import FilterPanel from "./FilterPanel";
import { OrbitProgress } from "react-loading-indicators";
import CartPhone from "./Cart/CartPhone";

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
        <div className="z-40 h-auto min-h-screen">
            {loading ? (
                <div
                    className="relative flex items-center justify-center w-full"
                    style={{ height: "calc(100vh - 64px)" }} // 64px = h-16
                >
                    <OrbitProgress
                        color="#2896b9"
                        size="medium"
                        text=""
                        textColor=""
                    />
                </div>
            ) : products.length > 0 ? (
                <div className="w-full">
                    <div className="flex flex-col justify-between px-5 sm:flex-row">

                        <FilterPanel
                            categorySelect={categorySelect}
                            setCategorySelect={setCategorySelect}
                        />

                        <div
                            className="w-full lg:w-[75%] grid  grid-rows-5 lg:gap-5 gap-2
                            md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
                        >
                            {products.map(
                                (p) => (console.log(p), (<Card product={p} />))
                            )}
                        </div>
                    </div>

                    <CartPhone />
                </div>
            ) : null}
        </div>
    );
}
