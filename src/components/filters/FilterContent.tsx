import React from 'react'
import ListItem from '../product-details/ListItem';
import { FaStar } from 'react-icons/fa';

export default function FilterContent ({
    priceRange,
    setPriceRange,
    categories,
    handleResetFilters,
}: any)  {
   return (
          <>
              {/* Filtro por categoría */}
              <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-slate-800">
                      Categorías
                  </h3>
                  <div className="space-y-2 overflow-y-auto">
                      <ListItem items={categories} />
                  </div>
              </div>
  
              {/* Filtro por precio */}
              <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-slate-800">
                      Precio
                  </h3>
                  <div className="space-y-1">
                      <div className="flex items-center justify-between">
                          <div className="flex items-center">
                              <span className="text-sm text-slate-600">Min:</span>
                              <input
                                  type="number"
                                  value={priceRange[0]}
                                  onChange={(e) =>
                                      setPriceRange([
                                          Math.min(
                                              parseInt(e.target.value),
                                              priceRange[1]
                                          ),
                                          priceRange[1],
                                      ])
                                  }
                                  className="w-20 px-2 py-1 text-sm border rounded"
                              />
                          </div>
                          <div className="flex items-center gap-2">
                              <span className="text-sm text-slate-600">Max:</span>
                              <input
                                  type="number"
                                  value={priceRange[1]}
                                  onChange={(e) =>
                                      setPriceRange([
                                          priceRange[0],
                                          Math.max(
                                              parseInt(e.target.value),
                                              priceRange[0]
                                          ),
                                      ])
                                  }
                                  className="w-20 px-2 py-1 text-sm border rounded"
                              />
                          </div>
                      </div>
                      <div className="relative pt-1">
                          <input
                              type="range"
                              min="0"
                              max="1000"
                              value={priceRange[0]}
                              onChange={(e) =>
                                  setPriceRange([
                                      parseInt(e.target.value),
                                      priceRange[1],
                                  ])
                              }
                              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200"
                          />
                          <input
                              type="range"
                              min="0"
                              max="1000"
                              value={priceRange[1]}
                              onChange={(e) =>
                                  setPriceRange([
                                      priceRange[0],
                                      parseInt(e.target.value),
                                  ])
                              }
                              className="w-full h-2 mt-2 rounded-lg appearance-none cursor-pointer bg-slate-200"
                          />
                      </div>
                  </div>
              </div>
  
              {/* Filtro por valoración */}
              <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-slate-800">
                      Valoración
                  </h3>
                  <div>
                      {[5, 4, 3, 2, 1].map((rating) => (
                          <label
                              key={rating}
                              className="flex items-center p-2 space-x-2 transition-colors rounded-lg cursor-pointer hover:bg-slate-50"
                          >
                              <input
                                  type="checkbox"
                                  className="w-4 h-4 border-2 rounded text-slate-600 focus:ring-slate-500"
                              />
                              <div className="flex items-center">
                                  {Array.from({ length: rating }).map(
                                      (_, index) => (
                                          <FaStar
                                              key={index}
                                              className="w-4 h-4 text-yellow-400"
                                          />
                                      )
                                  )}
                                  <span className="ml-2 text-sm text-slate-600">
                                      y más
                                  </span>
                              </div>
                          </label>
                      ))}
                  </div>
              </div>
  
              {/* Botones de acción */}
              <div className="flex gap-3 pb-16">
                  <button className="flex-1 px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-900">
                      Aplicar filtros
                  </button>
                  <button
                      className="px-4 py-2 text-sm font-medium transition-colors rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300"
                      onClick={handleResetFilters}
                  >
                      Limpiar
                  </button>
              </div>
          </>
      );
}
