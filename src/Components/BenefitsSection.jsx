

import React from "react";
import {
  Utensils, // for Regulates Eating Habits
  Activity, // for Increases Physical Capacity
  Dumbbell, // for Strengthens Muscles
  HeartPulse, // for Enhances Quality of Life
  Bone, // for Improves Bone Density
  Scale, // for Ensures Fat Free Body Mass
} from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="bg-white text-gray-800 py-4 px-6 md:px-20">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <p className="text-sm text-gray-500 uppercase tracking-widest">
          Get Into Shape, Now!
        </p>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">
          Regular Exercises in <span className="text-red-600">FitGym</span>{" "}
          Offers <span className="text-red-600">6 Key Benefits</span>
        </h2>
      </div>

      {/* Layout */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center">
        {/* Left Text */}
        <div className="flex flex-col md:mt-20 gap-8 max-w-sm text-left z-10 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
          <div className="flex flex-row-reverse items-start gap-3">
            <div>
              <h3 className="font-semibold text-lg mb-1 flex items-center  gap-2">
                Regulates Eating Habits
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nullam quis ante. Etiam sit amet orci eget eros faucibus
                tincidunt.
              </p>
            </div>
            <Utensils className="text-red-600 w-6 h-6 mt-1" />
          </div>

          <div className="flex flex-row-reverse items-start gap-3">
            <div>
              <h3 className="font-semibold text-lg mb-1 flex items-center  gap-2">
                Increases Physical Capacity
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla
                mauris.
              </p>
            </div>
            <Activity className="text-red-600 w-6 h-6 mt-1" />
          </div>

          <div className="flex flex-row-reverse items-start gap-3">
            <div>
              <h3 className="font-semibold text-lg mb-1 flex items-center  gap-2">
                Strengthens Muscles & Tissues
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nullam quis ante. Etiam sit amet orci eget eros faucibus
                tincidunt.
              </p>
            </div>
            <Dumbbell className="text-red-600 w-6 h-6 mt-1" />
          </div>
        </div>

        {/* Center Image */}
        <div className="hidden md:flex justify-center z-0">
          <img
            src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/img4.jpg?id=87"
            alt="FitGym Benefits"
            className="w-[420px] md:w-[600px] lg:w-[720px] object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col md:mt-20 gap-8 max-w-sm text-left z-10 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
          <div className="flex items-start gap-3">
            <HeartPulse className="text-red-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">
                Enhances Quality of Life
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla
                mauris.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Bone className="text-red-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">
                Improves Bone Density
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nullam quis ante. Etiam sit amet orci eget eros faucibus
                tincidunt.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Scale className="text-red-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">
                Ensures Fat Free Body Mass
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla
                mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
