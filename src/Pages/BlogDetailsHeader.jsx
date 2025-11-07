import BlogDetails from "./BlogDetails";
import React from "react";
const BlogDetailHeader = () => {
  return (
    <>
      {" "}
      <section className="w-auto pt-16 sm:pt-20 lg:pt-25 pb-4 bg-white font-sans">
        {/* Full width container, no padding */}
        <div className="w-full text-center">
          {/* Title Section */}
          <div className="relative py-6 w-full bg-white">
            <h2 className="text-4xl bg-black sm:text-5xl lg:text-6xl p-3 font-extrabold text-red-600 tracking-tight">
              Blogs Details
            </h2>
          </div>
        </div>
      </section>
      <BlogDetails />
    </>
  );
};

export default BlogDetailHeader;
