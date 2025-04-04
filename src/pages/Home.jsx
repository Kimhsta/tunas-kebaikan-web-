import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Foto1 from "../assets/kegiatanKajian/kegiatan1.jpeg";
import Foto2 from "../assets/kegiatanKajian/kegiatan2.jpeg";
import Foto3 from "../assets/kegiatanKajian/kegiatan3.jpeg";

const slides = [
  {
    image: Foto1,
    category: "Kajian Rutin Bulanan",
    title: "Pengaosan Akbar Masjid Agung Madaniyah Karanganyar",
    subtitle: "Bersama Ust. Abul Aswad al Bayaty",
  },
  {
    image: Foto2,
    category: "Kegiatan Douroh",
    title: "Fiqih Puasa di Masjid Islamic Center Karanganyar",
    subtitle: "Bersama Ust. Abul Aswad al Bayaty",
  },
  {
    image: Foto3,
    category: "Bulan Ramadhan",
    title: "Buka Bersama dan Pembagian 1000 Paket Sayur dan Sembako",
    subtitle: "Dengan Dr. Ahmad Syafi'i",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden"
      onMouseEnter={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={slides[currentIndex].image}
          alt="Slide"
          className="w-full h-full object-cover md:object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col sm:justify-center justify-end h-full text-white px-4 sm:px-6 md:px-12 lg:px-20 pb-12 sm:pb-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-2"
        >
          <span className="px-3 py-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-black bg-lime-400">
            {slides[currentIndex].category}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight"
        >
          {slides[currentIndex].title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center space-x-2 text-base sm:text-lg md:text-xl mb-2"
        >
          <i className="ri-mic-line text-xl sm:text-2xl"></i>
          <span>{slides[currentIndex].subtitle}</span>
        </motion.p>
      </motion.div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-gray-400 opacity-50"
            } transition duration-300 cursor-pointer`}
            onClick={() => setCurrentIndex(i)}
          ></span>
        ))}
      </div>

      {showNav && (
        <>
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute z-20 top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-r-lg shadow-lg hover:bg-lime-400 transition"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute z-20 top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-l-lg shadow-lg hover:bg-lime-400 transition"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </>
      )}
    </section>
  );
};

const SocialMediaSection = () => {
  return (
    <div className="text-center py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ikuti Kami di Media Sosial
      </h2>
      <div className="flex justify-center gap-12">
        <div className="flex flex-col items-center">
          <FaFacebookF className="text-4xl text-teal-700" />
          <span className="mt-2 text-gray-800 font-medium">Facebook</span>
        </div>
        <div className="flex flex-col items-center">
          <FaInstagram className="text-4xl text-teal-700" />
          <span className="mt-2 text-gray-800 font-medium">Instagram</span>
        </div>
        <div className="flex flex-col items-center">
          <FaYoutube className="text-4xl text-teal-700" />
          <span className="mt-2 text-gray-800 font-medium">Youtube</span>
        </div>
        <div className="flex flex-col items-center">
          <FaTiktok className="text-4xl text-teal-700" />
          <span className="mt-2 text-gray-800 font-medium">Tiktok</span>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <ImageSlider />
      <SocialMediaSection />
    </div>
  );
};

export default HomePage;
