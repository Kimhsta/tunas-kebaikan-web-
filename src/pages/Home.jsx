import React, { useState } from "react";
import Foto1 from "../assets/kegiatanKajian/kegiatan1.jpeg";
import Foto2 from "../assets/kegiatanKajian/kegiatan2.jpeg";

const images = [Foto1, Foto2];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={images[currentIndex]}
          alt="Slide"
          className="w-full h-full object-cover"
        />
      </div>

     {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-[70vh] text-left text-white px-6 md:px-20">
        {/* Label */}
        <div className="mb-4">
          <span className="bg-lime-500 px-4 py-1 text-2xl md:text-3xl text-black font-light">
            Kajian Rutin Bulanan
          </span>
        </div>

        {/* Judul */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Pengaosan Akbar <br /> Masjid Agung Madaniyah Karanganyar
        </h1>

        {/* Pemateri */}
        <p className="flex items-center space-x-2 text-lg md:text-xl mb-4">
          <i className="ri-mic-line text-2xl"></i>
          <span>Bersama Ust. Abul Aswad al Bayaty</span>
        </p>
      </div>

      {/* Bullet Slider Dummy */}
      <div className="relative z-10 flex justify-center mb-8">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 mx-2 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-gray-400 opacity-50"
            } transition duration-300 cursor-pointer`}
            onClick={() => setCurrentIndex(i)}
          ></span>
        ))}
      </div>

      {/* Tombol Navigasi */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        ▶
      </button>
    </section>
  );
};

export default ImageSlider;
