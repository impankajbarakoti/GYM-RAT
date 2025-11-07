import React, { useState, useEffect } from "react";
import { ShoppingCart, Star, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import productsData from "./productsData";

const ProductsPage = ({ onSelectProduct }) => {
  const [filter, setFilter] = useState("all");
  const [displayedProducts, setDisplayedProducts] = useState(productsData);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { addToCart } = useCart();

  // Filter handler with animation delay
  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      const filtered = productsData.filter((p) => {
        if (filter === "in-stock") return p.in_stock;
        if (filter === "sale") return p.price < p.original_price;
        return true;
      });
      setDisplayedProducts(filtered);
      setIsTransitioning(false);
    }, 300); // duration matches CSS fade-out
    return () => clearTimeout(timeout);
  }, [filter]);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          Gym Equipment
        </h1>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-8">
          {["all", "in-stock", "sale"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === f
                  ? "bg-slate-900 text-white shadow-lg scale-105"
                  : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:scale-105"
              }`}
            >
              {f === "all"
                ? "All Products"
                : f === "in-stock"
                ? "In Stock"
                : "On Sale"}
            </button>
          ))}
        </div>

        {/* Animated Product Grid */}
        <div
          key={filter}
          className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 transform transition-all duration-500 ${
            isTransitioning
              ? "opacity-0 translate-y-5 scale-[0.98]"
              : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {displayedProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectProduct(p.id)}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image_urls[0]}
                  alt={p.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                {p.price < p.original_price && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm rounded-full shadow-md">
                    -
                    {Math.round(
                      ((p.original_price - p.price) / p.original_price) * 100
                    )}
                    %
                  </div>
                )}
                {p.in_stock ? (
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                    In Stock
                  </div>
                ) : (
                  <div className="absolute top-3 left-3 bg-slate-400 text-white text-xs px-3 py-1 rounded-full shadow-md">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col">
                <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">
                  {p.name}
                </h3>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2 flex-grow">
                  {p.description}
                </p>

                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(p.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-slate-500 ml-1">
                    ({p.reviews})
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold">${p.price}</span>
                  {p.original_price > p.price && (
                    <span className="text-sm line-through text-slate-400">
                      ${p.original_price}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={(e) => handleAddToCart(p, e)}
                    disabled={!p.in_stock}
                    className="flex-1 bg-slate-900 text-white rounded-lg py-2 hover:bg-slate-800 transition-colors disabled:bg-slate-400"
                  >
                    <ShoppingCart className="inline w-4 h-4 mr-1" />
                    Add
                  </button>
                  <button
                    onClick={() => onSelectProduct(p.id)}
                    className="flex-1 bg-slate-100 text-slate-900 rounded-lg py-2 hover:bg-slate-200 transition-colors flex items-center justify-center"
                  >
                    View
                    <ChevronRight className="inline w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {displayedProducts.length === 0 && !isTransitioning && (
          <p className="text-center text-slate-600 mt-16">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
