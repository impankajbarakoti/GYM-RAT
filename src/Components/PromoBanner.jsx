import React from "react";
import { Dumbbell } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="relative w-full md:min-h-[200px] flex items-center justify-center overflow-hidden font-sans">
      {/* ✅ Fixed Background Image */}
      <div
        className="absolute md:h-[66vh]  w-full h-full inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://maruthi.wpengine.com/wp-content/uploads/2018/01/home-bg3.jpg')",
          backgroundPosition: "center",
        }}
      >
      </div>

      {/* ✅ Content Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 flex flex-col justify-center items-start text-left">
        {/* White bordered content box */}
        <div className="md:-mt-20  p-6 sm:p-8 md:p-10 lg:p-12 max-w-xs sm:max-w-sm md:max-w-md rounded-md">
          {/* Logo and Brand Name */}
          <div className="flex items-center text-white mb-8">
            <div className="border border-red-600 p-2 mr-3">
              <Dumbbell className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-widest">
              FIT GYM
            </span>
          </div>

          {/* Promo Text */}
          <p className="text-sm sm:text-base tracking-widest text-white mb-2">
            THIS SUMMER!
          </p>

          <h2 className="text-5xl sm:text-6xl md:text-6xl font-extrabold text-red-600 leading-none mb-3 sm:mb-4">
            SAVE <span className="text-white">50%</span>
          </h2>

          <p className="text-white text-xs sm:text-sm tracking-[0.2em] mb-8 ml-1 sm:ml-2">
            OFF HERE
          </p>

          {/* Call to Action Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 sm:px-8 rounded-sm text-sm sm:text-base uppercase transition duration-300 shadow-md hover:shadow-lg">
            Become a Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
