import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import StandardFooter from "./Components/StandardFooter";
import Abouty from "./Pages/Abouty";
import Contacty from "./Pages/Contacty";
import Blogs from "./Pages/Blogs";
import BlogHeader from "./Pages/BlogHeader";
import BlogDetailHeader from "./Pages/BlogDetailsHeader";
import ProductApp from "./GymProductPage/ProductApp";




const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouty />} />
        <Route path="/contact" element={<Contacty />} />
        <Route path="/blogs" element={<BlogHeader />} />
        <Route path="/blog/:id" element={<BlogDetailHeader />} />
        <Route path="/products" element={<ProductApp/>} />
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
      </Routes>
      <StandardFooter />
    </div>
  );
};

export default App;
