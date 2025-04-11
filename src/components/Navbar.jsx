import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownKajian, setDropdownKajian] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Toggle untuk menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setDropdownKajian(false);
  };

  // Toggle untuk submenu Kajian
  const toggleDropdownKajian = () => {
    setDropdownKajian((prev) => !prev);
  };

  // Cek apakah halaman sedang discroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set tema awal dari localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Toggle tema terang/gelap
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/75 dark:bg-gray-900/75 backdrop-blur-md shadow-md"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-25">
        <div className="flex items-center justify-between py-2 md:py-4">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-8">
            <li>
              <a
                href="/"
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 transition"
              >
                Home
              </a>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdownKajian}
                className="flex items-center gap-1 font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 transition focus:outline-none"
              >
                Kajian
                <i
                  className={`ri-arrow-down-s-line transition-transform duration-300 ${
                    dropdownKajian ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {dropdownKajian && (
                <ul className="absolute top-full left-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-10 animate-dropdown">
                  <li>
                    <a
                      href="/kajian/sub1"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-700 transition"
                    >
                      Kajian Rutin
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kajian/sub2"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-700 transition"
                    >
                      Kajian Pekan
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="/Artikel"
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 transition"
              >
                Artikel
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 transition"
              >
                About
              </a>
            </li>
          </ul>

          {/* Bagian Kanan (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Tombol toggle tema */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 transition rounded-xl"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <i className="ri-sun-line text-xl text-yellow-400"></i>
              ) : (
                <i className="ri-moon-line text-xl text-gray-800"></i>
              )}
            </button>
            {/* Tombol Donasi Dakwah (hanya muncul di desktop) */}
            <a
              href="/donasi-dakwah"
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
            >
              Donasi Dakwah
            </a>
          </div>

          {/* Bagian Mobile */}
          <div className="flex md:hidden items-center gap-3">
            {/* Tombol toggle tema */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 transition"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <i className="ri-sun-line text-xl text-yellow-400"></i>
              ) : (
                <i className="ri-moon-line text-xl text-gray-800"></i>
              )}
            </button>
            {/* Tombol Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className="relative w-10 h-10 text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
                }`}
              >
                <i className="ri-menu-line text-2xl"></i>
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <i className="ri-close-line text-2xl"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-slide-down">
          <ul className="mt-4 mx-4 mb-4 flex flex-col gap-4 px-6 py-4 border-2 border-gray-50 dark:border-gray-800 rounded-lg ">
            <li>
              <a
                href="/"
                className="group font-medium text-gray-700 dark:text-gray-200 hover:bg-green-500 hover:text-white transition block rounded px-4 py-2"
              >
                Home
              </a>
            </li>
            <li>
              <button
                onClick={toggleDropdownKajian}
                className="group w-full flex justify-between items-center font-medium text-gray-700 dark:text-gray-200 hover:bg-green-500 hover:text-white transition focus:outline-none rounded px-4 py-2"
              >
                Kajian
                <i
                  className={`ri-arrow-down-s-line transition-transform duration-300 ${
                    dropdownKajian ? "rotate-180" : ""
                  } group-hover:text-white`}
                ></i>
              </button>
              {dropdownKajian && (
                <ul className="pl-4 mt-2 animate-dropdown">
                  <li>
                    <a
                      href="/pages/KajianRutin.jsx"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-green-600 hover:text-white rounded transition"
                    >
                      Kajian Rutin
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pages/TablikAkbar.jsx"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-green-600 hover:text-white rounded transition"
                    >
                      Tablik Akbar
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="/Artikel"
                className="group font-medium text-gray-700 dark:text-gray-200 hover:bg-green-600 hover:text-white transition block rounded px-4 py-2"
              >
                Artikel
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="group font-medium text-gray-700 dark:text-gray-200 hover:bg-green-600 hover:text-white transition block rounded px-4 py-2"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
