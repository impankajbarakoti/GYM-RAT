import React from "react";
// This component implements the two-column Call-to-Action section.

const CallToActionSplit = () => {
  return (
    // Main Container: Flexbox to hold the two halves.
    <div className="flex flex-col md:flex-row md:min-w-[700px] ">
      {/* --- LEFT SIDE: JOIN NOW --- */}
      {/* Added 'group' class to enable group-hover utilities */}
      <div
        className="flex-1 relative group flex items-center justify-center p-10 bg-cover bg-center transition duration-500 ease-in-out"
        // Background image for the left side
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://maruthi.wpengine.com/wp-content/uploads/2018/01/img3-1.jpg?id=12875')",
        }}
      >
        {/* White Hover Overlay (New Element) */}
        {/* Starts invisible (opacity-0) and transitions to a subtle white (opacity-10) on hover */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-lg"></div>

        {/* Content wrapper: Added 'relative z-10' to ensure content stays above the overlay */}
        <div className="text-center text-white relative z-10">
          {/* Logo 1 */}
          <div className="mb-4">
            <img
              src="https://maruthi.wpengine.com/wp-content/uploads/2018/01/icon1.png"
              alt="Mega Fitness Logo"
              className="w-16 h-16 mx-auto"
            />
          </div>

          <p className="text-lg font-light mb-1 uppercase tracking-wider">
            JOIN THE MEGA FITNESS MEGA
          </p>

          {/* Main Call to Action Text */}
          <h2 className="text-2xl font-extrabold mb-8 uppercase">
            <span className="text-red-600">JOIN</span> NOW
          </h2>

          {/* Button: ASK NOW */}
          <button
            onClick={() => console.log("Ask Now button clicked")}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold uppercase px-12 py-3 rounded-sm transition duration-300 transform hover:scale-105 tracking-widest border-2 border-red-600"
          >
            ASK NOW
          </button>
        </div>
      </div>

      {/* --- RIGHT SIDE: BOOK AN APPOINTMENT --- */}
      {/* Added 'group' class to enable group-hover utilities */}
      <div
        className="flex-1 relative group flex items-center justify-center p-10 bg-cover bg-center transition duration-500 ease-in-out"
        // Background image for the right side
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://maruthi.wpengine.com/wp-content/uploads/2018/01/img4.jpg?id=12873')",
        }}
      >
        {/* White Hover Overlay (New Element) */}
        {/* Starts invisible (opacity-0) and transitions to a subtle white (opacity-10) on hover */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-lg"></div>

        {/* Content wrapper: Added 'relative z-10' to ensure content stays above the overlay */}
        <div className="text-center text-white relative z-10">
          {/* Logo 2 */}
          <div className="mb-4">
            <img
              src="https://maruthi.wpengine.com/wp-content/uploads/2018/01/client1.png"
              alt="Noga Gym Logo"
              className="w-16 h-16 mx-auto"
            />
          </div>

          <p className="text-lg font-light mb-1 uppercase tracking-wider">
            GET INTO SHAPE, NOW!
          </p>

          {/* Main Call to Action Text */}
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 uppercase leading-tight">
            BOOK AN <span className="text-red-600">APPOINTMENT</span>
          </h2>

          {/* Button: BOOK NOW */}
          <button
            onClick={() => console.log("Book Now button clicked")}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold uppercase px-12 py-3 rounded-sm transition duration-300 transform hover:scale-105 tracking-widest border-2 border-red-600"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSplit;
