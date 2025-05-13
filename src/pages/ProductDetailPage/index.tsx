import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../models/Product";
import { getProductById } from "../../service/StoreApi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { FaCartPlus } from "react-icons/fa";
import Rating from "../../models/Rating";
import ScrollToTop from "../../components/common/ScrollToTop";
import Button from "../../components/Button";
import RatingStar from "../../components/RatingStar";
import { useCart } from "../../hooks/userCart";
import { Item } from "../../models/Cart";
import { OrbitProgress } from "react-loading-indicators";
import QuantitySelector from "../../components/QuantitySelector";
import CartPhone from "../../components/Cart/CartPhone";

export default function index() {
    const { id } = useParams();
    {
        /*const produdct : Product=*/
    }

    const { cart, addItem, removeItem } = useCart();
    const [quantity, setQuantity] = useState<number>(1);
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);

    const rating: Rating = product?.rating ?? { rate: 0, count: 0 };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const fetchedProduct = await getProductById(id!);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error("Error al cargar el producto:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);
    return (
        <div>
            <ScrollToTop />
            <Header></Header>
            {loading && (
                <div
                    className="relative flex items-center justify-center w-full"
                    style={{ height: "calc(100vh - 64px)" }}
                >
                    <OrbitProgress
                        color="#2896b9"
                        size="medium"
                        text=""
                        textColor=""
                    />
                </div>
            )}
            {!loading && !product && (
                <div className="flex items-center justify-center w-full h-screen">
                    <h1 className="text-2xl">No se encontró el producto</h1>
                </div>
            )}
            {!loading && product && (
                <section className="flex flex-col w-full sm:flex-row sm:h-screen">
                    <div className="flex justify-center sm:w-1/2">
                        <div className="flex items-center justify-center w-4/6 h-4/5">
                            <img
                                src={product?.image}
                                alt=""
                                className="object-contain w-full h-full mt-20"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col px-4 sm:w-1/2">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            {product?.name}
                        </h1>

                        {/* Precio */}
                        <p className="mt-4 text-3xl font-semibold text-blue-600">
                            ${product?.price}
                        </p>

                        <article className="flex">
                            <RatingStar rate={product.rating.rate}></RatingStar>
                            <a
                                className="ml-2 text-sm text-gray-500 hover:underline hover:text-blue-600"
                                href="#"
                            >
                                {rating.count} opiniones
                            </a>
                        </article>

                        <p className="mt-1 text-sm text-gray-500">
                            Envío:{" "}
                            <span className="font-medium text-green-600">
                                Gratis
                            </span>
                        </p>
                        <div className="mt-6 mr-10 text-xl font-light">
                            <label htmlFor="description" className="block mb-1">
                                Descripción
                            </label>
                            <p
                                id="description"
                                className="ml-3 text-base leading-relaxed text-gray-700"
                            >
                                {product?.description ||
                                    "Sin descripción disponible."}
                            </p>
                        </div>
                        <br />
                        <div className="flex self-center gap-2">
                            <QuantitySelector
                                value={quantity}
                                onChange={setQuantity}
                            />
                            <Button
                                className={"p-2 flex flex-row "}
                                onClick={() =>
                                    addItem(new Item(quantity, product))
                                }
                            >
                                <FaCartPlus />
                                <span className="hidden sm:block">
                                    Agregar al Carrito
                                </span>
                            </Button>
                        </div>
                    </div>
                    <CartPhone />
                </section>
            )}
            <Footer></Footer>
        </div>
    );
}
