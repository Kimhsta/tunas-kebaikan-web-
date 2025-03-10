import React from "react";
import Foto from "../assets/kegiatanKajian/kegiatan1.jpeg";

const Home = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Foto})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        {/* Label */}
        <div className="mb-4">
          <span className="bg-green-600 px-3 py-2 rounded">Kegiatan Dauroh</span>
        </div>
        {/* Judul */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Pengaosan Akbar Masjid Angung Madaniyah Karanganyar
        </h1>
        {/* Pemateri */}
        <p className="flex items-center justify-center space-x-2 text-lg mb-2">
          <i className="ri-mic-line text-green-600"></i>
          <span>Bersama Ust. Abul Aswad al Bayaty</span>
        </p>
        {/* Bullet Slider Dummy */}
        <div className="mt-8 flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 cursor-pointer"></span>
          <span className="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 cursor-pointer"></span>
          <span className="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 cursor-pointer"></span>
        </div>
      </div>
    </section>
  );
};

export default Home;
