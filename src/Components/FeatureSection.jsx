import React from "react";
import { Zap, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Increase Energy Levels",
    description:
      "Regular physical activity boosts your energy and overall vitality, helping you stay active throughout the day.",
  },
  {
    icon: Shield,
    title: "Reduce Risk of Chronic Diseases",
    description:
      "Exercise helps prevent or manage many health problems such as heart disease, diabetes, and high blood pressure.",
  },
  {
    icon: Clock,
    title: "Delay Signs of Ageing",
    description:
      "Consistent workouts improve muscle tone, flexibility, and longevity, keeping you youthful and strong.",
  },
];

const FeatureItem = ({ Icon, title, description }) => (
  <div className="flex items-start space-x-3 sm:space-x-4 mb-6 sm:mb-8">
    <div className="flex-shrink-0 pt-1">
      <Icon className="w-6 h-6 text-red-500" strokeWidth={1.8} />
    </div>
    <div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const FeatureSection = () => {
  return (
    <div className="md:min-h-screen bg-gray-50 font-inter">
      {/* Full-width container */}
      <div className="w-full bg-white shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* LEFT: Image Section */}
        <div className="relative w-full h-auto md:w-1/2 sm:h-[400px] md:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://maruthi.wpengine.com/wp-content/uploads/revslider/fitgym/slider1.jpg')",
            }}
          ></div>
        </div>

        {/* RIGHT: Content Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
          <header className="mb-6 sm:mb-10 text-center md:text-left">
            <p className="text-xs sm:text-sm tracking-widest text-gray-600 font-medium mb-2">
              GET INTO SHAPE NOW!
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
              EXERCISE REGULARLY
              <span className="text-red-600 ml-1 sm:ml-2">STAY HEALTHY</span>
            </h1>
          </header>

          <section>
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                Icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
