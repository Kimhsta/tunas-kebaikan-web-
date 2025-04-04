import React from "react";
import posterKajianRutin from "../assets/kajian-rutin.jpg";
import posterTablighAkbar from "../assets/tabligh-akbar.jpg";

export const KajianRutin = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Kajian Rutin</h1>
      <img 
        src={posterKajianRutin} 
        alt="Poster Kajian Rutin" 
        className="w-full max-w-md mx-auto rounded-lg shadow-lg"
      />
      <p className="mt-4 text-gray-700">
        Kajian rutin ini diadakan setiap pekan dengan pembicara pilihan.
        Mari tingkatkan ilmu dan iman kita bersama!
      </p>
    </div>
  );
};

export const TablighAkbar = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Tabligh Akbar</h1>
      <img 
        src={posterTablighAkbar} 
        alt="Poster Tabligh Akbar" 
        className="w-full max-w-md mx-auto rounded-lg shadow-lg"
      />
      <p className="mt-4 text-gray-700">
        Tabligh Akbar merupakan acara besar yang menghadirkan ulama terkenal.
        Jangan lewatkan kesempatan untuk mendapatkan ilmu yang bermanfaat!
      </p>
    </div>
  );
};
