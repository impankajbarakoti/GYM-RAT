import React, { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
// import { CartProvider, useCart } fro
import { CartProvider , useCart } from "../Context/CartContexts";
import ProductsPage from "./ProductsPage";
import ProductDetailPage from "./ProductDetailPage";

function AppContent() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const {
    cartItems,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1
            onClick={() => setSelectedProductId(null)}
            className="text-2xl font-bold cursor-pointer text-slate-900"
          >
            🏋️ GymGear
          </h1>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative p-3 hover:bg-slate-100 rounded-lg"
          >
            <ShoppingCart className="w-6 h-6 text-slate-900" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
          <div className="w-96 bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-slate-600">Cart is empty</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 mb-4 border-b pb-3">
                    <img
                      src={item.image_urls[0]}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-slate-600">${item.price}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 bg-slate-100 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 bg-slate-100 rounded"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-600 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-6 border-t pt-4">
                  <p className="font-bold text-lg">
                    Total: ${getTotalPrice().toFixed(2)}
                  </p>
                  <button className="w-full mt-4 bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Main */}
      {!selectedProductId ? (
        <ProductsPage onSelectProduct={setSelectedProductId} />
      ) : (
        <ProductDetailPage
          productId={selectedProductId}
          onBack={() => setSelectedProductId(null)}
        />
      )}
    </div>
  );
}

export default function ProductApp() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
