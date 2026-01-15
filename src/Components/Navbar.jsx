import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/logo_dark.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md
        ${scrolled ? "bg-white/90 dark:bg-gray-900/90 shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={darkMode || scrolled ? logoDark : logoLight}
            alt="TeqTronics Logo"
            className="h-12 w-auto"
          />
          <div className="flex flex-col leading-none">
            <span className={`font-bold text-lg ${darkMode || scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}>
              TeqTronics
            </span>
            <span className="text-[10px] text-gray-500 dark:text-gray-400">Software & Training</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-medium">
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["Trainings", "/trainings"],
            ["About", "/about"],
            ["Contact", "/contact"]
          ].map(([name, path]) => (
            <li key={name}>
              <Link
                to={path}
                className={`relative px-1 py-1 transition-all ${
                  isActive(path)
                    ? "text-blue-600 font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                    : darkMode || scrolled
                      ? "text-gray-900 dark:text-white hover:text-blue-600"
                      : "text-white hover:text-blue-300"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-700 dark:text-white transition-colors"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <Link
            to="/contact"
            className="px-5 py-2 rounded-lg font-semibold transition bg-blue-600 text-white hover:bg-blue-700"
          >
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-800 dark:text-white"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900/95 backdrop-blur-md px-6 py-6 space-y-4 font-medium">
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["Trainings", "/trainings"],
            ["About", "/about"],
            ["Contact", "/contact"]
          ].map(([name, path]) => (
            <Link
              key={name}
              to={path}
              onClick={() => setOpen(false)}
              className={`block px-2 py-2 rounded transition ${
                isActive(path)
                  ? "bg-blue-100 dark:bg-blue-700/30 text-blue-600 dark:text-white font-semibold"
                  : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {name}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 px-2 py-2 text-gray-800 dark:text-white"
          >
            {darkMode ? <FaSun /> : <FaMoon />} Toggle Mode
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
