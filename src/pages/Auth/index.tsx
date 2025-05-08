import React from "react";
import Button from "../../components/Button";

export default function index() {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
            <div className="flex w-11/12 overflow-hidden text-white shadow-2xl md:w-3/4 lg:w-2/3 h-3/4 rounded-2xl bg-slate-700">
                {/* Información lateral */}
                <div className="flex flex-col justify-center w-1/2 p-6 bg-slate-300">
                    <img
                        src="/logo_large.png"
                        className="object-contain h-40"
                    />
                </div>

                {/* Formulario */}
                <div className="flex flex-col items-center justify-center w-1/2 p-6 text-gray-800 bg-white">
                    <form className="flex flex-col w-full max-w-sm">
                        <h2 className="mb-6 text-2xl font-bold text-center">
                            Iniciar Sesión
                        </h2>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block mb-1 text-sm font-medium"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-1 text-sm font-medium"
                            >
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <Button type="submit" className={"text-center"}>Iniciar sesión</Button>
                    </form>

                    <p className="mt-4 text-sm">
                        ¿No tienes una cuenta?{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Regístrate
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
