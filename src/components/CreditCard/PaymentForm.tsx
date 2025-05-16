import React from "react";
import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css';

interface PaymentFormProps {
  formData: {
    number: string;
    expiry: string;
    cvc: string;
    name: string;
  };
  handleInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PaymentForm({ formData, handleInputChange }: PaymentFormProps) {
    const [focus, setFocus] = React.useState("");

    const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
        setFocus(evt.target.name);
    };

    return (
        <div className="lg:flex lg:justify-center lg:items-center">
            <Cards
                number={formData.number}
                expiry={formData.expiry}
                cvc={formData.cvc}
                name={formData.name}
                focused={focus as "name" | "number" | "expiry" | "cvc"}
            />
            <div className="mt-6 space-y-4" >
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Número de Tarjeta
                    </label>
                    <input
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="1234 5678 9012 3456"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Nombre en la Tarjeta
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="NOMBRE APELLIDO"
                        required
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Fecha de Expiración
                        </label>
                        <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="MM/AA"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            CVV
                        </label>
                        <input
                            type="text"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="123"
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
