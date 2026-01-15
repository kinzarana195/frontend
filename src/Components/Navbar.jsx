import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (scrolled) =>
    `hover:text-blue-500 ${
      scrolled ? "text-gray-800" : "text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold ${
            scrolled ? "text-blue-600" : "text-white"
          }`}
        >
          TeqTronics
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/services">Services</Link></li>
  <li><Link to="/trainings">Trainings</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className={`hidden md:inline-block px-5 py-2 rounded-lg font-semibold transition
            ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-600 hover:bg-gray-100"
            }
          `}
        >
          Apply Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-3xl ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 font-medium text-gray-800">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#trainngs" onClick={() => setOpen(false)}>Trainings</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <a
            href="#contact"
            className="block bg-blue-600 text-white text-center py-2 rounded-lg font-semibold"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
