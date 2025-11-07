import { ShoppingCart, Star, Check, Truck, Shield, Heart } from "lucide-react";
import { useState } from "react";

const GymProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const product = {
    name: "Premium Adjustable Dumbbells Set",
    price: 299.99,
    originalPrice: 449.99,
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    images: [
      "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg",
      "https://images.pexels.com/photos/4162484/pexels-photo-4162484.jpeg",
      "https://images.pexels.com/photos/4162485/pexels-photo-4162485.jpeg",
      "https://images.pexels.com/photos/4162482/pexels-photo-4162482.jpeg",
    ],
    sizes: ["S (5-25 lbs)", "M (5-50 lbs)", "L (5-75 lbs)", "XL (5-100 lbs)"],
    features: [
      "Quick-adjust weight selection system",
      "Space-saving compact design",
      "Anti-roll hexagonal shape",
      "Premium rubber-coated handles",
      "Durable steel construction",
      "Includes storage tray",
    ],
    specifications: {
      "Weight Range": "5-50 lbs per dumbbell",
      Material: "Steel with rubber coating",
      Adjustments: "15 weight settings",
      Dimensions: '16" x 8" x 9"',
      Warranty: "2 years limited",
    },
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-10">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:bg-red-50 transition-all duration-300 hover:scale-110">
                  <Heart className="w-6 h-6 text-slate-700 hover:text-red-500 transition-colors" />
                </button>
                {product.inStock && (
                  <div className="absolute top-4 left-4 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full shadow-lg">
                    In Stock 
                  </div>
                )}
              </div>

              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      selectedImage === index
                        ? "border-slate-800 shadow-md"
                        : "border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-3 leading-tight">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-slate-600 font-medium">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-5xl font-bold text-slate-900">
                    ${product.price}
                  </span>
                  <span className="text-2xl text-slate-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                    Save{" "}
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    %
                  </span>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Transform your home gym with our premium adjustable dumbbells.
                  Combining 15 weight settings in one compact design, these
                  dumbbells replace an entire rack of weights, saving space
                  while delivering professional-grade performance.
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  Select Weight Range
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size.split(" ")[0])}
                      className={`px-4 py-3 border-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedSize === size.split(" ")[0]
                          ? "border-slate-800 bg-slate-800 text-white shadow-lg"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange("decrement")}
                      className="px-6 py-3 bg-slate-50 hover:bg-slate-100 font-semibold text-slate-700 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-8 py-3 font-semibold text-slate-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increment")}
                      className="px-6 py-3 bg-slate-50 hover:bg-slate-100 font-semibold text-slate-700 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-slate-600 font-medium">
                    Total: ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <ShoppingCart className="w-6 h-6" />
                  Add to Cart
                </button>
                <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-xl font-semibold text-lg hover:bg-slate-900 hover:text-white transition-all duration-300">
                  Buy Now
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-slate-100">
                <div className="flex flex-col items-center text-center p-4">
                  <Truck className="w-8 h-8 text-slate-700 mb-2" />
                  <span className="text-sm font-semibold text-slate-900">
                    Free Shipping
                  </span>
                  <span className="text-xs text-slate-600 mt-1">
                    Orders over $50
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <Shield className="w-8 h-8 text-slate-700 mb-2" />
                  <span className="text-sm font-semibold text-slate-900">
                    2-Year Warranty
                  </span>
                  <span className="text-xs text-slate-600 mt-1">
                    Full coverage
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <Check className="w-8 h-8 text-slate-700 mb-2" />
                  <span className="text-sm font-semibold text-slate-900">
                    Easy Returns
                  </span>
                  <span className="text-xs text-slate-600 mt-1">
                    30-day policy
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-slate-100 bg-slate-50">
            <div className="p-6 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Specifications
                  </h2>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center py-3 border-b border-slate-200"
                        >
                          <span className="font-semibold text-slate-900">
                            {key}
                          </span>
                          <span className="text-slate-700">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymProductPage;
