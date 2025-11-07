import React from "react";

const HeroSection = () => {
  // Background style for parallax/fixed image effect
  const backgroundStyle = {
    backgroundImage:
      "url('https://maruthi.wpengine.com/wp-content/uploads/revslider/fitgym/slider3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <section
      className="relative flex items-center justify-center text-center overflow-hidden w-full min-h-[80vh] sm:min-h-[90vh] md:h-[200px] font-sans"
      style={backgroundStyle}
    >
      {/* Overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center p-6 sm:p-8 md:p-10 text-white">
        <h1 className="text-4xl sm:text-6xl md:text-7xl -mt-20 md:-mt-50  font-extrabold tracking-widest uppercase mb-3 leading-tight drop-shadow-lg">
          FITNESS WORKOUT
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4">
          <p className="text-red-600 text-2xl sm:text-3xl md:text-2xl font-black tracking-widest uppercase drop-shadow-md">
            PROGRAM
          </p>

          <button
            onClick={() => console.log("Schedule button clicked")}
            className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-semibold uppercase px-8 py-3 rounded-sm shadow-xl transition-transform duration-300 hover:scale-105 tracking-wider border-2 border-red-600 hover:border-red-700"
          >
            SCHEDULE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



