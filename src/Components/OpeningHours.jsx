import React from "react";

const OpeningHoursSection = () => {
  return (
    <div className="bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start  px-6 md:px-10 text-white relative">
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-4 z-10 px-4">
          <div className="flex items-center space-x-2 text-sm uppercase tracking-wide text-red-600 font-semibold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-white text-4xl  py-10 font-bold tracking-normal">
              OPENING <span className="text-red-600">HOURS</span>
            </span>
          </div>
          <p className="text-gray-300 text-xl max-w-md">
            Everyday provides a golden opportunity to get stronger by eating
            better, and living healthier. Now is the time to upgrade you to the
            best and best possible version.
          </p>

          {/* Timing blocks */}
          <div className="flex space-x-4 mt-6">
            <div className="bg-gray-700 p-4 rounded-md shadow-xl transition-all duration-300 hover:border-red-600 hover:shadow-red-900/50 cursor-pointer text-gray-200 text-xs font-semibold">
              <div>From Monday to Friday</div>
              <div className="font-bold mt-1 text-gray-100">
                5:30 am to 9:30 am
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-md shadow-xl transition-all duration-300 hover:border-red-600 hover:shadow-red-900/50 cursor-pointer text-gray-200 text-xs font-semibold">
              <div>Saturday & Sunday</div>
              <div className="font-bold mt-1 text-gray-100">
                7:00 am to 9:00 am
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative mt-8 md:mt-0 flex justify-end">
          <img
            src="https://girlygym.wpengine.com/wp-content/uploads/2017/06/7-2-768x672.jpg"
            alt="Fitness Woman"
            className="relative hidden md:block z-20 w-[400px] md:w-auto"
            style={{ position: "relative", bottom: "-130px" }}
          />
        </div>
      </div>

      {/* White background under the image to mimic the overlap */}
      <div className="bg-white h-20 md:h-32"></div>
    </div>
  );
};

export default OpeningHoursSection;
