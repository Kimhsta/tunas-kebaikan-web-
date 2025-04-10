import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import { FaFacebookF, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";
import Foto1 from "../assets/kegiatanKajian/kegiatan1.jpeg";
import Foto2 from "../assets/kegiatanKajian/kegiatan2.jpeg";
import Foto3 from "../assets/kegiatanKajian/kegiatan3.jpeg";

import Kajian1 from "../assets/Poster Kajian/WhatsApp Image 2025-03-19 at 21.43.14.jpeg";
import Kajian2 from "../assets/Poster Kajian/WhatsApp Image 2025-03-09 at 05.45.37.jpeg";
import Kajian3 from "../assets/Poster Kajian/WhatsApp Image 2025-04-04 at 18.34.26.jpeg";

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


// Gallery.jsx
const imageUrls = [
{
  image: Foto1,
},
{
  image: Foto2,
},
{
  image: Foto3,
},
{
  image: Foto1,
},{
  image: Foto1,
},{
  image: Foto1,
},{
  image: Foto1,
},{
  image: Foto1,
},{
  image: Foto1,
},
];

const Gallery = () => {
  return (
    <section className="py-2 px-2 md:py-8 lg:px-4">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 ">
        {imageUrls.map((src, index) => (
          <div key={index} className="w-full overflow-hidden rounded-lg shadow-sm hover:shadow-md transition duration-300">
<img
  src={src.image}
  alt={`Galeri ${index + 1}`}
  className="w-full aspect-[5/3] object-cover"
/>

          </div>
        ))}
      </div>
    </section>
  );
};



const SocialMediaSection = () => {
  return (
    <div className="text-center py-14 bg-gradient-to-b from-gray-100 to-gray-200">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-12 md:mb-20">
        Ikuti Kami di Media Sosial
      </h2>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16 px-4">
        {[
          {
            icon: <FaFacebookF />,
            name: "Facebook",
            link: "https://web.facebook.com/profile.php?id=100076263575730",
          },
          {
            icon: <FaInstagram />,
            name: "Instagram",
            link: "https://www.instagram.com/tunas_kebaikan_/",
          },
          {
            icon: <FaYoutube />,
            name: "YouTube",
            link: "https://www.youtube.com/@TunasKebaikan-d3q",
          },
          {
            icon: <FaTelegram />,
            name: "Telegram",
            link: "https://t.me/tunaskebaikan",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transform transition-all duration-300 hover:scale-110 w-24 md:w-28"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-lime-400 text-white text-3xl md:text-5xl shadow-lg">
              {item.icon}
            </div>
            <span className="mt-3 text-base md:text-lg text-gray-900 font-semibold">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};


import { useRef } from "react";

const KajianPopuler = () => {
  const scrollRef = useRef(null);

  const kajianList = [
    {
      title: "Meningkatkan Ketakwaan di Era Digital",
      subtitle: "Raih keberkahan dengan ilmu dan teknologi",
      image: Kajian1,
    },
    {
      title: "Menjaga Hati di Tengah Kesibukan",
      subtitle: "Ketenangan batin di dunia yang semakin sibuk",
      image: Kajian2,
    },
    {
      title: "Istiqomah dalam Ibadah",
      subtitle: "Menjalani hidup dengan ketenangan dan keistiqomahan",
      image: Kajian3,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      {/* Judul */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        <span className="text-lime-500">Kajian Populer</span> 
      </h2>

      {/* Wrapper untuk Scroll Horizontal di Mobile */}
      <div className="mt-6 md:mt-8">
  <div
    ref={scrollRef}
    className="flex overflow-x-auto gap-4 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible"
  >
    {kajianList.map((kajian, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-[80%] sm:w-[60%] md:w-auto"
      >
        <img
          src={kajian.image}
          alt={kajian.title}
          className="w-full h-100 object-cover"
        />
        <div className="p-3">
          <h3 className="text-md md:text-lg font-semibold text-gray-900">
            {kajian.title}
          </h3>
          <p className="text-gray-600 mt-1 text-xs md:text-sm">
            {kajian.subtitle}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};


const HomePage = () => {
  return (
    <div>
      <ImageSlider />
      <KajianPopuler />
      <Gallery />
      <SocialMediaSection />
    </div>
  );
};


export default HomePage;
