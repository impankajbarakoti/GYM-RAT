import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import ProductsPage from "./components/ProductsPage";
import ProductDetailPage from "./components/ProductDetailPage";
import { CartProvider, useCart } from "./context/CartContext";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("products");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const {
    cartItems,
    getTotalPrice,
    setIsCartOpen,
    isCartOpen,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage("product-detail");
    window.scrollTo(0, 0);
  };

  const handleBackToProducts = () => {
    setCurrentPage("products");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <nav className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => handleBackToProducts()}
              className="flex items-center gap-2 text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors"
            >
              <ShoppingCart className="w-8 h-8" />
              GymGear
            </button>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-3 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-slate-900" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end lg:items-center lg:justify-end">
          <div className="w-full lg:w-96 h-screen lg:h-auto bg-white rounded-t-2xl lg:rounded-2xl shadow-2xl overflow-y-auto">
            <div className="sticky top-0 flex justify-between items-center p-6 border-b-2 border-slate-100 bg-white">
              <h2 className="text-2xl font-bold text-slate-900">
                Shopping Cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-slate-900" />
              </button>
            </div>

            <div className="p-6">
              {cartItems.length === 0 ? (
                <p className="text-center text-slate-600 py-8">
                  Your cart is empty
                </p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <img
                        src={item.image_urls[0]}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-slate-600 text-sm mb-2">
                          ${item.price} each
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 bg-white border border-slate-300 rounded hover:bg-slate-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 bg-white border border-slate-300 rounded">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 bg-white border border-slate-300 rounded hover:bg-slate-100"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="border-t-2 border-slate-200 pt-4 mt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-slate-900 text-lg">
                        Total:
                      </span>
                      <span className="text-2xl font-bold text-slate-900">
                        ${getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                    <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <main>
        {currentPage === "products" && (
          <ProductsPage onSelectProduct={handleSelectProduct} />
        )}
        {currentPage === "product-detail" && (
          <ProductDetailPage
            productId={selectedProductId}
            onBack={handleBackToProducts}
          />
        )}
      </main>
    </div>
  );
}

function ProductMain() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default ProductMain;
