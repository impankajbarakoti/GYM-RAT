import React from "react";
import { MapPin, Phone } from "lucide-react"; // ✅ lucide-react icons import

// New Logo URL constant
const LOGO_URL =
  "https://maruthi.wpengine.com/wp-content/uploads/2018/01/footer-logo.png";

// Logo component updated to use the provided image
const Logo = ({ text = "", className = "" }) => (
  <div className={`flex items-center ${className}`}>
    <img src={LOGO_URL} alt={`${text} Logo`} className="h-16 w-auto" />
    <span className="text-xl font-bold tracking-wider">{text}</span>
  </div>
);

// Links data structure
const servicesLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Blogs", href: "/blogs" },
  { title: "Products", href: "/products" },
];

const infoLinks = [
  { title: "Products", href: "/products" },
  { title: "Blog", href: "/blogs" },
  { title: "Blog Details", href: "/blog/1" },
];

// Helper component for the link list section
const FooterLinksSection = ({ title, links }) => (
  <div className="text-left">
    <h3 className="text-lg font-bold text-gray-900 uppercase mb-4 border-b-2 border-red-600 inline-block pb-1">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-gray-600 hover:text-red-600 transition-colors text-sm"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const StandardFooter = () => {
  return (
    <footer className="bg-gray-100 py-16 sm:py-20 font-['Inter'] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Footer Grid: 3 Columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* 1. Left Column: Logo and Details */}
          <div className="space-y-6 text-left">
            <Logo className="text-gray-900" />

            <p className="text-sm text-gray-600 pr-8">
              Empowering your fitness journey with quality products and expert
              guidance since 2010.
            </p>

            {/* ✅ Contact Info with lucide-react icons */}
            <div className="space-y-2 pt-2 text-sm">
              <div className="flex items-center text-gray-700">
                <MapPin className="text-red-600 w-5 h-5 mr-3" />
                <span>123 Fitness Ave, City, State, 10001</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="text-red-600 w-5 h-5 mr-3" />
                <a
                  href="tel:9876543210"
                  className="hover:text-red-600 transition-colors"
                >
                  +91 9876 543 210
                </a>
              </div>
            </div>
          </div>

          {/* 2. Center Column: Services and Info Links */}
          <div className="grid grid-cols-2 gap-8 md:gap-16 text-left">
            <FooterLinksSection title="Services" links={servicesLinks} />
            <FooterLinksSection title="Info" links={infoLinks} />
          </div>

          {/* 3. Right Column: Contact Info / Newsletter */}
          <div className="space-y-6 text-left">
            <h3 className="text-lg font-bold text-gray-900 uppercase mb-4 border-b-2 border-red-600 inline-block pb-1">
              Contact Info
            </h3>

            <p className="text-sm text-gray-600">
              Got a question or need support? Reach out to us.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col space-y-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 focus:border-red-600 focus:ring-red-600 outline-none text-sm"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-600 text-white font-semibold uppercase text-sm hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default StandardFooter;
