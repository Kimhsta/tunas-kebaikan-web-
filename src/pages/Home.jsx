import React, { useState } from "react";
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

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={slides[currentIndex].image}
          alt="Slide"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-6 md:px-20">
        <div className="mb-4">
          <span className="px-4 py-1 text-2xl md:text-3xl font-light text-black" 
            style={{
              backgroundColor:
                slides[currentIndex].category === "Kajian Rutin Bulanan"
                  ? "#A3E635"
                  : slides[currentIndex].category === "Kegiatan Douroh"
                  ? "#38BDF8"
                  : "#F59E0B",
            }}>
            {slides[currentIndex].category}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {slides[currentIndex].title}
        </h1>
        <p className="flex items-center space-x-2 text-lg md:text-xl mb-4">
          <i className="ri-mic-line text-2xl"></i>
          <span>{slides[currentIndex].subtitle}</span>
        </p>
      </div>

      {/* Bullet Points */}
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

      {/* Tombol Navigasi */}
      <button
        onClick={prevSlide}
        className="absolute z-20 top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded shadow-lg hover:bg-gray-200 transition"
      >
        <i className="ri-arrow-left-s-line text-2xl"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-20 top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded shadow-lg hover:bg-gray-200 transition"
      >
        <i className="ri-arrow-right-s-line text-2xl"></i>
      </button>
    </section>
  );
};

export default ImageSlider;
