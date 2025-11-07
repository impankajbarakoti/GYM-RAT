import React from "react";

// Data structure for the associates/logos
const associatesData = [
  {
    id: 1,
    name: "Must Group",
    logoUrl: "https://maruthi.wpengine.com/wp-content/uploads/2017/12/cl1.jpg",
  },
  {
    id: 2,
    name: "S Circle",
    logoUrl: "https://maruthi.wpengine.com/wp-content/uploads/2017/12/cl2.jpg",
  },
  {
    id: 3,
    name: "XII Diamond",
    logoUrl: "https://maruthi.wpengine.com/wp-content/uploads/2017/12/cl3.jpg",
  },
  {
    id: 4,
    name: "Red&Co",
    logoUrl: "https://maruthi.wpengine.com/wp-content/uploads/2017/12/cl4.jpg",
  },
];

const AssociatesSection = () => {
  return (
    <section className="py-7 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle */}
        <p className="text-xs tracking-[0.2em] font-medium uppercase text-gray-800 mb-2">
          TOGETHER WE CAN ACHIEVE MORE
        </p>

        {/* Main Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12">
          OUR SUCCESSFUL <span className="text-red-600">ASSOCIATES</span>
        </h2>

        {/* Associates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {associatesData.map((associate) => (
            <div
              key={associate.id}
              className="group aspect-[4/3] sm:aspect-  hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01] rounded-lg flex items-center justify-center p-4 cursor-pointer"
            >
              <img
                src={associate.logoUrl}
                alt={associate.name}
                className="h-auto max-w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociatesSection;
