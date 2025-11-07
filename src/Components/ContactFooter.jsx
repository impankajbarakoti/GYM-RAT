import React from 'react';
// Using the provided logo URL
const LOGO_URL = "https://maruthi.wpengine.com/wp-content/uploads/2018/01/footer-logo.png";

// Icons for the contact and social links (using Heroicons as a common example)
const Icon = ({ children, className = '' }) => (
    <span className={`inline-block w-4 h-4 text-gray-400 ${className}`}>{children}</span>
);

const LocationIcon = () => (
    <Icon className="mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    </Icon>
);

const PhoneIcon = () => (
    <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l1.5-2.25C4.65 3.5 5.72 3 7 3h10c1.28 0 2.35.5 3.25 1.5l1.5 2.25M2.25 6.75h19.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5c0 1.25 1.05 2.25 2.3 2.25h10.4c1.25 0 2.3-.99 2.3-2.25M4.5 19.5h15" />
        </svg>
    </Icon>
);

const MailIcon = () => (
    <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 00-4.5-4.5H6.75a4.5 4.5 0 00-4.5 4.5v10.5a4.5 4.5 0 004.5 4.5h10.5a4.5 4.5 0 004.5-4.5V6.75z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12h.008v.008H16.5v-.008z" />
        </svg>
    </Icon>
);

const SocialIcon = ({ children }) => (
    <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors mr-4" aria-label="Social Link">
        <Icon className="w-5 h-5">{children}</Icon>
    </a>
);


const ContactFooter = () => {
    const socialLinks = [
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.542-1.333h2.458v-4h-3.264c-3.15 0-3.736 1.182-3.736 3.914v2.086z"/></svg>, // Facebook
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.529-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.723 7 4.56v6.675z"/></svg>, // LinkedIn (using a general icon for the small size)
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.791-1.574 2.162-2.722-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.373 0-6.108 2.735-6.108 6.109 0 .479.055.946.155 1.394-5.071-.242-9.575-2.687-12.593-6.38-1.579 2.693-.766 5.253 1.799 6.703-.787-.024-1.529-.245-2.179-.604-.006.079-.006.159-.006.237 0 2.964 2.11 5.432 4.904 6.002-.516.141-1.058.216-1.611.216-.391 0-.773-.038-1.143-.108.784 2.434 3.052 4.19 5.731 4.239-2.091 1.64-4.721 2.62-7.59 2.62-.493 0-.979-.029-1.46-.085 2.706 1.731 5.925 2.727 9.366 2.727 10.021 0 15.496-8.312 15.496-15.497 0-.236-.005-.473-.014-.707.954-.689 1.77-1.545 2.427-2.529z"/></svg>, // Twitter
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm-2.835-13.916l7.85 3.925-7.85 3.925v-7.85z"/></svg> // Vimeo (using a general icon for the small size)
    ];

    return (
      <footer className="bg-white py-2 sm:py-2 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - GET INTO SHAPE CONTACT INFORMATION */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs tracking-[0.2em] font-medium uppercase text-gray-800 mb-2">
              GET INTO SHAPE
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
              CONTACT <span className="text-red-600">INFORMATION</span>
            </h2>
          </div>

          {/* Main Content Grid (Contact Info + Form) */}
          <div className="md:grid md:grid-cols-2 md:gap-16">
            {/* Left Column: Contact Details */}
            <div className="space-y-6 mb-12 md:mb-0">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img src={LOGO_URL} alt="Maruthi Logo" className="md:h-16 w-auto" />
                
              </div>

              {/* Contact Details List */}
              <div className="space-y-4 pt-4 text-sm">
                <div className="flex items-start text-gray-600">
                  <LocationIcon />
                  <span className="ml-3">
                    integer tincidunt. Cras dapibus. Vivafwfw.
                  </span>
                </div>

                <div className="flex items-center text-gray-600">
                  <PhoneIcon />
                  <a
                    href="tel:+64 040 102 098"
                    className="ml-3 hover:text-red-600 transition-colors"
                  >
                    +64 040 102 098
                  </a>
                </div>

                <div className="flex items-center text-gray-600">
                  <MailIcon />
                  <a
                    href="mailto:sales@gmaruthi.com"
                    className="ml-3 hover:text-red-600 transition-colors"
                  >
                    sales@gmaruthi.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex pt-6">
                {socialLinks.map((IconComponent, index) => (
                  <SocialIcon key={index}>{IconComponent}</SocialIcon>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="space-y-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                {/* Input Field: First Name */}
                <div className="relative border-b border-gray-300 focus-within:border-red-600 transition-colors duration-300">
                  <input
                    type="text"
                    id="first-name"
                    className="block w-full appearance-none bg-transparent focus:outline-none focus:ring-0 pt-6 pb-2 text-gray-800"
                    placeholder="Full Name" // Important for the floating label effect
                  />
                </div>

                {/* Input Field: Email (Repeated structure for other fields) */}
                <div className="relative border-b border-gray-300 focus-within:border-red-600 transition-colors duration-300">
                  <input
                    type="email"
                    id="email"
                    className="block w-full appearance-none bg-transparent focus:outline-none focus:ring-0 pt-6 pb-2 text-gray-800"
                    placeholder="Email"
                  />
                </div>

                {/* Input Field: Phone */}
                <div className="relative border-b border-gray-300 focus-within:border-red-600 transition-colors duration-300">
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full appearance-none bg-transparent focus:outline-none focus:ring-0 pt-6 pb-2 text-gray-800"
                    placeholder="Phone"
                  />
                </div>

                {/* Textarea Field: Your Text */}
                <div className="relative border-b border-gray-300 focus-within:border-red-600 transition-colors duration-300">
                  <textarea
                    id="your-text"
                    rows="1" // Start small, can be adjusted for multiline
                    className="block w-full appearance-none bg-transparent focus:outline-none focus:ring-0 pt-6 pb-2 text-gray-800 resize-none"
                    placeholder="Your Text"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-red-600 text-white font-bold tracking-wider uppercase text-sm hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default ContactFooter;
