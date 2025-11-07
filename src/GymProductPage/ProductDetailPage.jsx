import React, { useState } from "react";
import {
  ShoppingCart,
  Star,
  Check,
  Truck,
  Shield,
  ChevronLeft,
  Info,
  List,
  Dumbbell,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import productsData from "./productsData";

const ProductDetailPage = ({ productId, onBack }) => {
  const product = productsData.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-6">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-6 cursor-pointer text-slate-700 hover:text-slate-900"
      >
        <ChevronLeft className="w-5 h-5 cursor-pointer" /> Back to Products
      </button>

      {/* Main section */}
      <div className="bg-white rounded-2xl shadow-xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
        {/* Product Images */}
        <div className="w-full">
          <img
            src={product.image_urls[selectedImage]}
            alt={product.name}
            className="w-full rounded-xl mb-4 shadow-lg"
          />
          <div className="grid grid-cols-4 gap-2 w-full">
            {product.image_urls.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                onClick={() => setSelectedImage(idx)}
                className={`w-full cursor-pointer rounded-lg border-2 transition-all duration-200 ${
                  selectedImage === idx
                    ? "border-slate-900 scale-105"
                    : "border-transparent hover:border-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3 text-slate-900">
              {product.name}
            </h1>

            <div className="flex items-center mb-4">
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
              <span className="ml-2 text-slate-600">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-lg text-slate-700 mb-6">{product.description}</p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-slate-900">
                ${product.price}
              </span>
              {product.price < product.original_price && (
                <span className="line-through text-slate-400 text-xl">
                  ${product.original_price}
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 bg-slate-100 rounded-lg text-lg font-bold hover:bg-slate-200"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 bg-slate-100 rounded-lg text-lg font-bold hover:bg-slate-200"
              >
                +
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => addToCart(product, quantity)}
                className="flex-1 bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
              <button className="flex-1 border border-slate-900 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                Buy Now
              </button>
            </div>
          </div>

          {/* Info Badges */}
          <div className="grid grid-cols-3 gap-3 text-center border-t pt-4">
            <div>
              <Truck className="w-6 h-6 mx-auto mb-1 text-slate-600" />
              <p className="text-sm text-slate-700">Free Shipping</p>
            </div>
            <div>
              <Shield className="w-6 h-6 mx-auto mb-1 text-slate-600" />
              <p className="text-sm text-slate-700">2-Year Warranty</p>
            </div>
            <div>
              <Check className="w-6 h-6 mx-auto mb-1 text-slate-600" />
              <p className="text-sm text-slate-700">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* More Product Details */}
      <div className="w-full max-w-7xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8">
        {/* Features */}
        {product.features && (
          <div className="mb-8 w-full">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <List className="w-5 h-5 text-slate-700" /> Key Features
            </h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 w-full">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Specifications */}
        {product.specifications && (
          <div className="mb-8 w-full">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-slate-700" /> Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-slate-700 w-full">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-1">
                  <span className="font-medium">{key}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How to Use Section */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-slate-700" /> How to Use
          </h2>
          <p className="text-slate-700 leading-relaxed">
            {`Start with a proper warm-up to activate your muscles before using the ${product.name}. Use controlled movements and correct posture to prevent injuries. 
            Adjust the settings (if applicable) according to your comfort level and workout goal. 
            Clean and store the equipment in a dry area after every use to ensure durability.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
