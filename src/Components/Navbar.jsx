import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 flex justify-between items-center px-6 md:px-12 py-3 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-black shadow-md" : "bg-black "
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img
          src="https://maruthi.wpengine.com/wp-content/uploads/2018/01/light-logo.png"
          alt="Logo"
          className="w-20 p-1  md:w-38"
        />
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-base md:text-lg font-semibold">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`relative pb-1 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled
                  ? "text-white after:bg-white"
                  : "text-white after:bg-white"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <a href="/contact">
          <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded shadow-md hover:bg-red-600 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-gray-400">
            JOIN US
          </button>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black shadow-md md:hidden z-40">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-base font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative text-white hover:text-gray-700 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="/contact" onClick={() => setIsOpen(false)}>
                <button className="bg-red-600 text-white font-semibold px-6 py-3 w-full rounded shadow-md hover:bg-red-500 hover:scale-105 transition-transform">
                  JOIN US
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
