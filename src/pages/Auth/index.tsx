import React from "react";
import Button from "../../components/ui/Button";

export default function index() {
    return (
        <div className="flex items-center justify-center w-screen min-h-screen py-8 bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="flex flex-col w-11/12 overflow-hidden bg-white shadow-2xl md:flex-row md:w-3/4 lg:w-2/3 rounded-2xl">
                {/* Información lateral */}
                <div className="relative flex flex-col justify-center w-full p-6 md:w-1/2 md:p-8 bg-gradient-to-br from-blue-50 to-slate-100">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-pattern"></div>
                    <img
                        src="/logo_large.png"
                        className="relative object-contain h-24 mx-auto transition-transform duration-300 md:h-40 md:mx-0 hover:scale-105"
                        alt="Logo"
                    />
                    <h1 className="relative mt-4 text-xl font-bold text-center md:mt-6 md:text-2xl text-slate-800 md:text-left">
                        Bienvenido de nuevo
                    </h1>
                    <p className="relative mt-2 text-sm text-center text-slate-600 md:text-left md:text-base">
                        Accede a tu cuenta para continuar
                    </p>
                </div>

                {/* Formulario */}
                <div className="flex flex-col items-center justify-center w-full p-6 bg-white md:w-1/2 md:p-8">
                    <form className="flex flex-col w-full max-w-sm space-y-4 md:space-y-6">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold md:text-3xl text-slate-800">
                                Iniciar Sesión
                            </h2>
                            <p className="mt-2 text-sm text-slate-600">Ingresa tus credenciales para continuar</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-slate-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 transition-all duration-200 border rounded-lg outline-none md:py-3 border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:ring-opacity-50"
                                    
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-slate-700"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    className="w-full px-4 py-2 transition-all duration-200 border rounded-lg outline-none md:py-3 border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="w-4 h-4 rounded text-slate-600" />
                                <span className="ml-2 text-slate-600">Recordarme</span>
                            </label>
                            <a href="#" className="text-center text-slate-600 hover:text-slate-800 hover:underline sm:text-right">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>

                        <Button 
                            type="submit" 
                            className="w-full py-2.5 md:py-3 text-base font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Iniciar sesión
                        </Button>

                        <p className="text-sm text-center text-slate-600">
                            ¿No tienes una cuenta?{" "}
                            <a href="#" className="font-medium text-slate-800 hover:underline">
                                Regístrate aquí
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}