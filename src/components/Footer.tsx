import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b to-10% from-white to-slate-800 text-gray-200 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Sobre Nosotros</h2>
          <p className="text-sm">
            Somos una tienda online dedicada a ofrecer productos de calidad, con envíos rápidos y atención personalizada.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Categorías</h2>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Ropa</a></li>
            <li><a href="#" className="hover:underline">Electrónica</a></li>
            <li><a href="#" className="hover:underline">Hogar</a></li>
            <li><a href="#" className="hover:underline">Ofertas</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Ayuda</h2>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
            <li><a href="#" className="hover:underline">Envíos</a></li>
            <li><a href="#" className="hover:underline">Devoluciones</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Síguenos</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} TuTienda. Todos los derechos reservados.
      </div>
    </footer>
  );
}
