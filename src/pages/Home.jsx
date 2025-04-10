import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  },
  {
    image: Foto2,
    category: "Kegiatan Douroh",
    title: "Fiqih Puasa di Masjid Islamic Center Karanganyar",
  },
  {
    image: Foto3,
    category: "Bulan Ramadhan",
    title: "Buka Bersama dan Pembagian 1000 Paket Sayur dan Sembako",
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
      className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden "
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
        className="relative z-10 flex flex-col sm:justify-center justify-end h-full text-white px-4 sm:px-6 md:px-12 lg:px-40 pb-10 sm:pt-50"
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
      </motion.div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
  {slides.map((_, i) => (
    <span
      key={i}
      className={`
        transition-all duration-300 cursor-pointer
        rounded-full
        ${i === currentIndex 
          ? "bg-white scale-125 shadow-md" 
          : "bg-gray-400 opacity-50"}
        w-2 h-2 sm:w-3 sm:h-3
      `}
      onClick={() => setCurrentIndex(i)}
    ></span>
  ))}
</div>


      {showNav && (
        <>
          <button
            onClick={prevSlide}
            className="hidden sm:flex items-center justify-start w-8 h-15 absolute z-20 top-[55%] left-0 transform -translate-y-1/2 bg-white rounded-r-lg shadow-lg hover:bg-lime-400 transition"
          >
            <i className="ri-arrow-left-s-line text-3xl"></i>
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex items-center justify-start w-8 h-15 absolute z-20 top-[55%] right-0 transform -translate-y-1/2 bg-white p-1 rounded-l-lg shadow-lg hover:bg-lime-400 transition"
          >
            <i className="ri-arrow-right-s-line text-3xl"></i>
          </button>
        </>
      )}
    </section>
  );
};

const Gallery = () => {
  const imageUrls = [Foto1, Foto2, Foto3, Foto1, Foto1, Foto1, Foto1, Foto1, Foto1];
  return (
    <section className="py-2 px-2 md:py-8 lg:px-4">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2">
        {imageUrls.map((image, index) => (
          <div key={index} className="w-full overflow-hidden rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <img
              src={image}
              alt={`Galeri ${index + 1}`}
              className="w-full aspect-[5/3] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

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
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        <span className="text-lime-500">Kajian Populer</span>
      </h2>

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
    </div>
  );
};

export default HomePage;
