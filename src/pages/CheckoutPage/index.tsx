import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../hooks/userCart";
import Header from "../../components/ui/Header";
import PaymentForm from "../../components/credit-card/PaymentForm";

export const CheckoutPage = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        number: "",
        expiry: "",
        cvc: "",
        name: "",
        address: "",
        city: "",
        postalCode: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        // Aquí iría la lógica para procesar el pago
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="container px-4 py-8 mx-auto">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">
                        Información de Pago
                    </h1>

                    <div className="flex flex-col gap-8 lg:flex-row">
                        <div className="flex flex-col gap-8 overflow-x-auto shadow-2xl lg:flex-row">
                            <form
                                onSubmit={handleSubmit}
                                className="p-6 rounded-lg shadow lg:min-w-[50rem]"
                            >
                                <PaymentForm
                                    formData={formData}
                                    handleInputChange={handleInputChange}
                                />

                                <div className="mt-8 mb-6">
                                    <h2 className="mb-4 text-xl font-semibold">
                                        Dirección de Facturación
                                    </h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                                Dirección
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border rounded-lg"
                                                required
                                            />
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex-1">
                                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                                    Ciudad
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border rounded-lg"
                                                    required
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                                    Código Postal
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postalCode"
                                                    value={formData.postalCode}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border rounded-lg"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-4 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                                >
                                    Pagar ${cart.amount.toFixed(2)}
                                </button>
                            </form>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <div className="sticky p-6 bg-white rounded-lg shadow top-4">
                                <h2 className="mb-4 text-xl font-semibold">
                                    Resumen del Pedido
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>${cart.amount.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Envío</span>
                                        <span>Gratis</span>
                                    </div>
                                    <div className="pt-3 mt-3 border-t">
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>Total</span>
                                            <span>
                                                ${cart.amount.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
