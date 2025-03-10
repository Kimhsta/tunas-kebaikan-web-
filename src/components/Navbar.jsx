import { useState } from "react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownKajian, setDropdownKajian] = useState(false);
  const [dropdownTentang, setDropdownTentang] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    // Tutup dropdown ketika menu mobile di-toggle
    setDropdownKajian(false);
    setDropdownTentang(false);
  };

  const toggleDropdownKajian = () => {
    setDropdownKajian((prev) => !prev);
    if (dropdownTentang) setDropdownTentang(false);
  };

  const toggleDropdownTentang = () => {
    setDropdownTentang((prev) => !prev);
    if (dropdownKajian) setDropdownKajian(false);
  };

  return (
    <div className="navbar fixed w-full z-50 bg-white/85 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Logo" className="h-12" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li>
              <a
                href="#"
                className="font-medium text-gray-700 hover:text-green-600 transition"
              >
                Beranda
              </a>
            </li>

            {/* Dropdown untuk Kajian (Desktop) */}
            <li className="relative">
              <button
                onClick={toggleDropdownKajian}
                className="flex items-center gap-1 font-medium text-gray-700 hover:text-green-600 transition focus:outline-none"
              >
                Kajian
                <i
                  className={`ri-arrow-down-s-line transition-transform duration-300 ${
                    dropdownKajian ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {dropdownKajian && (
                <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-10 animate-dropdown">
                  <li>
                    <a
                      href="/kajian/sub1"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    >
                      Kajian Rutin
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kajian/sub2"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    >
                      Kajian Pekan
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="/"
                className="font-medium text-gray-700 hover:text-green-600 transition"
              >
                Artikel
              </a>
            </li>

            {/* Dropdown untuk Tentang Kami (Desktop) */}
            <li className="relative">
              <button
                onClick={toggleDropdownTentang}
                className="flex items-center gap-1 font-medium text-gray-700 hover:text-green-600 transition focus:outline-none"
              >
                Tentang Kami
                <i
                  className={`ri-arrow-down-s-line transition-transform duration-300 ${
                    dropdownTentang ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {dropdownTentang && (
                <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-10 animate-dropdown">
                  <li>
                    <a
                      href="/tentang/sejarah"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    >
                      Sejarah
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tentang/visi"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    >
                      Visi & Misi
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Pencarian & Tema (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <i className="ri-sun-line text-2xl"></i>
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for"
                className="px-3 py-1 border rounded-full focus:outline-none text-sm w-32"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <i className="ri-search-2-line"></i>
              </span>
            </div>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative w-10 h-10 text-gray-700 focus:outline-none"
            >
              {/* Ikon hamburger */}
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
                }`}
              >
                <i className="ri-menu-line text-2xl"></i>
              </span>
              {/* Ikon close */}
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

      {/* Mobile Menu dengan Animasi Slide Down */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md animate-slideDown">
          <ul className="flex flex-col gap-4 px-6 py-4">
            <li>
              <a
                href="#"
                className="font-medium text-gray-700 hover:text-green-600 transition block"
              >
                Beranda
              </a>
            </li>

            {/* Mobile Dropdown untuk Kajian */}
            <li>
              <button
                onClick={toggleDropdownKajian}
                className="w-full flex justify-between items-center font-medium text-gray-700 hover:text-green-600 transition focus:outline-none"
              >
                Kajian
                <i
                  className={`ri-arrow-down-s-line transition-transform duration-300 ${
                    dropdownKajian ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {dropdownKajian && (
                <ul className="pl-4 mt-2 animate-dropdown">
                  <li>
                    <a
                      href="/kajian/sub1"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    >
                      Kajian Rutin
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kajian/sub2"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    >
                      Kajian Pekan
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="/"
                className="font-medium text-gray-700 hover:text-green-600 transition block"
              >
                Artikel
              </a>
            </li>

            {/* Mobile Dropdown untuk Tentang Kami */}
            <li>
              <button
                onClick={toggleDropdownTentang}
                className="w-full flex justify-between items-center font-medium text-gray-700 hover:text-green-600 transition focus:outline-none"
              >
                Tentang Kami
                <i
                  className={`ri-arrow-down-s-line transition-transform duration-300 ${
                    dropdownTentang ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {dropdownTentang && (
                <ul className="pl-4 mt-2 animate-dropdown">
                  <li>
                    <a
                      href="/tentang/sejarah"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    >
                      Sejarah
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tentang/visi"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    >
                      Visi & Misi
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Mobile Search & Theme */}
            <li className="border-t pt-4 mt-4">
              <div className="flex items-center justify-between">
                <button className="text-gray-600 hover:text-gray-800">
                  <i className="ri-sun-line text-2xl"></i>
                </button>
                <div className="relative flex-1 ml-4">
                  <input
                    type="text"
                    placeholder="Search for"
                    className="w-full px-3 py-1 border rounded-full focus:outline-none text-sm"
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <i className="ri-search-2-line"></i>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
