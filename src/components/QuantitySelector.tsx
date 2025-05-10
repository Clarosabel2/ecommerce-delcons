import React from "react";

export default function QuantitySelector({ value, onChange }) {
    return (
        <div className="flex items-center justify-center gap-2 px-2 text-lg font-semibold ">
            <label htmlFor="slt-cant">Cantidad: </label>
            <select
                id="slt-cant"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="font-normal border border-blue-600 rounded-lg p-0.5 bg-blue-600 text-white py-2"
            >
                <option value={1}>1 unidad</option>
                <option value={2}>2 unidades</option>
                <option value={3}>3 unidades</option>
                <option value={4}>4 unidades</option>
                <option value={5}>5 unidades</option>
                <option value={6}>Más de 5 unidades</option>
            </select>
        </div>
    );
}
