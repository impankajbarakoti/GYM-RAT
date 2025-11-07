import React from "react";
import { Watch, Weight, Dumbbell } from "lucide-react"; // Icons

const COLLAGE_IMAGE_URL =
  "https://madebydesignesia.com/themes/powerflow/images/misc/c2.webp";

const FitnessFocusSection = () => {
  return (
    <section className="bg-white py-6 sm:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reverse flex on mobile, normal row on md+ */}
        <div className="flex flex-col-reverse md:flex-row md:items-stretch md:space-x-12">
          {/* Left Section: Text Content and Features */}
          <div className="md:w-1/2 flex flex-col justify-center mb-12 md:mb-0">
            {/* Subtitle */}
            <p className="text-xs tracking-[0.2em] font-medium uppercase text-gray-800 mb-2">
              BEST IS SELF MOTIVATION
            </p>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 leading-tight">
              STAY FOCUSSED{" "}
              <span className="text-red-600">STAY FIT & HEALTHY</span>
            </h2>

            {/* Feature List */}
            <div className="space-y-10">
              {/* Feature 1 */}
              <div className="flex items-start">
                <Watch className="text-red-600 flex-shrink-0 mt-1 w-6 h-6" />
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Advance Pilates Training
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Viverra feugiat, quis tellus. Phasellus viverra nulla ut
                    metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <Weight className="text-red-600 flex-shrink-0 mt-1 w-6 h-6" />
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Power Weight Lifting
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Vivamus elementum semper nisi. Aenean vulputate eleifend
                    tellus consequat vitae, eleifend ac, enim.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start">
                <Dumbbell className="text-red-600 flex-shrink-0 mt-1 w-6 h-6" />
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Tennis Training for Boys
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Semper nisi. Aenean vulputate eleifend tellus consequat
                    vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Enlarged Image Collage */}
          <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
            <div className="relative w-full h-full md:h-auto max-w-full md:-ml-10">
              <img
                src={COLLAGE_IMAGE_URL}
                alt="Fitness activities collage"
                className="w-full h-full md:h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessFocusSection;
