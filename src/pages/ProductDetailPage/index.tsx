import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../models/Product";
import { getProductById } from "../../services/StoreApi";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import ScrollToTop from "../../components/common/ScrollToTop";
import { useCart } from "../../hooks/userCart";
import { Item } from "../../models/Cart";
import { OrbitProgress } from "react-loading-indicators";
import CartPhone from "../../components/cart/CartPhone";
import ProductDetails from "../../components/product-details/ProductDetails";

export default function ProductDetailPage() {
    const { id } = useParams();
    const { addItem } = useCart();
    const [quantity, setQuantity] = useState<number>(1);
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);

    
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
            <Header />
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
                <div className="min-h-screen py-12 bg-gray-100">
                    <ProductDetails
                        product={product}
                        quantity={quantity}
                        onQuantityChange={setQuantity}
                        onAddToCart={addItem}
                    />
                    <CartPhone />
                </div>
            )}
            <Footer />
        </div>
    );
}
