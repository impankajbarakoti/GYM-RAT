import React from "react";

const ServicesFeature = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="https://maruthi.wpengine.com/wp-content/uploads/2018/01/home-bg4.jpg"
        alt="Gym Background"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-6 md:left-6 transform -translate-y-1/2 text-white max-w-xl md:max-w-2xl">
        <h1 className="text-2xl md:text-5xl mt-10 bg-white/70 md:bg-transparent font-bold text-black mb-4 leading-snug">
          The Best <span className="text-red-600">Fitness Gym</span>
        </h1>

        {/* ✅ Hidden on mobile, visible on md and larger */}
        <p className="hidden md:block font-Monaco text-gray-800 font-semibold mr-30 md:text-gray-700 text-base leading-relaxed bg-white/70 md:bg-white/60 p-6 rounded-md shadow-lg">
          "Taking care of your body is the best investment you can make — it's
          the only place you have to live. A healthy outside starts from the
          inside, so fuel your body with a balanced diet and consistent
          exercise. Fitness is not a destination; it's a lifelong journey of
          self-care and self-discovery. Stay motivated by focusing on progress,
          not perfection, and challenge your limits to become the best version
          of yourself."
        </p>
      </div>
    </div>
  );
};

export default ServicesFeature;
