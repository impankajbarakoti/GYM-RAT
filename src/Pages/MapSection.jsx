import React from "react";

const MapSection = () => {
  return (
    <section className="w-full  py-10 px-5  h-[500px] md:h-[600px]">
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086868480206!2d-122.41941518468124!3d37.77492977975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c06d0977%3A0x6c24b4f354f4c9d0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1694219400000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        className="border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default MapSection;
