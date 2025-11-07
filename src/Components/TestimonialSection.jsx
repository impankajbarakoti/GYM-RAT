import React from "react";

// Data for the testimonials
const testimonials = [
  {
    id: 1,
    name: "VIVIAN ESTRADA",
    title: "Web Developer",
    image:
      "https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg", // Placeholder image
    quote:
      "Faucibus tincidunt. Sed fringilla mauris sit amet nibh venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget erosDonec sodales sagittis.",
    signature:
      "https://maruthi.wpengine.com/wp-content/uploads/2017/12/sign1.jpg", // Placeholder signature
  },
  {
    id: 2,
    name: "BRENDA FRAZIER",
    title: "Web Designer",
    image:
      "https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim2.jpg", // Placeholder image
    quote:
      "Faucibus tincidunt. Sed fringilla mauris sit amet nibh venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget erosDonec sodales sagittis.",
    signature:
      "https://maruthi.wpengine.com/wp-content/uploads/2017/12/sign2.jpg", // Placeholder signature
  },
  {
    id: 3,
    name: "BERNICE AGUILAR",
    title: "SEO Analyst",
    image:
      "https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim3.jpg", // Placeholder image
    quote:
      "Faucibus tincidunt. Sed fringilla mauris sit amet nibh venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget erosDonec sodales sagittis.",
    signature:
      "https://maruthi.wpengine.com/wp-content/uploads/2017/12/sign3.jpg", // Placeholder signature
  },
];

// Individual Testimonial Card Component
const TestimonialCard = ({ name, title, image, quote, signature }) => (
  <div className="flex flex-col items-center text-center p-4">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
    />
    <h3 className="text-lg font-bold text-gray-800 uppercase mb-1">{name}</h3>
    <p className="text-sm text-gray-500 mb-6">{title}</p>

    <div className="relative mb-6 px-4">
      <span className="absolute left-0 top-0 text-5xl text-gray-300 font-serif leading-none -translate-x-1/2 -translate-y-1/2">
        “
      </span>
      <p className="text-gray-600 italic leading-relaxed">{quote}</p>
      <span className="absolute right-0 bottom-0 text-5xl text-gray-300 font-serif leading-none translate-x-1/2 translate-y-1/2 rotate-180">
        “
      </span>
    </div>

    <img
      src={signature}
      alt={`${name} Signature`}
      className="w-32 h-auto mt-4 opacity-75" // Adjust size as needed
    />
  </div>
);

// Main Testimonial Section Component
const TestimonialSection = () => {
  return (
    <div className="bg-white py-7  px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-red-600 font-medium mb-2 uppercase">
            GETTING INTO SHAPE
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            WHAT DO OUR CLIENTS{" "}
            <span className="text-red-600">SAYS ABOUT US?</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              quote={testimonial.quote}
              signature={testimonial.signature}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
