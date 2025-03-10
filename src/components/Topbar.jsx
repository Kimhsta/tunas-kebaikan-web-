import { useEffect, useState } from "react";

const Topbar = () => {
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    const dateString = now.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setToday(dateString);
  }, []);

  return (
    <div className="w-full bg-lime-400 text-white text-sm">
      {/* Kontainer utama: pakai h-8 agar tinggi tetap */}
      <div className="container mx-auto px-6 flex items-center h-8 space-x-4 overflow-hidden">
        {/* Tanggal Otomatis */}
        <span className="font-semibold whitespace-nowrap leading-none">
          {today}
        </span>

        {/* Label "Kajian Populer" isi penuh tanpa jarak atas-bawah */}
        <div className="bg-green-600 flex items-center h-full px-2 space-x-1 whitespace-nowrap">
          <i className="ri-book-open-fill"></i>
          <span className="leading-none">Kajian Populer</span>
        </div>

        {/* Marquee Pemateri Kajian */}
        <div className="relative flex-1 h-5 overflow-hidden">
          <div className="absolute whitespace-nowrap animate-marquee">
          Dosa-dosa yang membinasakan ~  Ad Durus Al Muhimmah Li' Ammatil Ummah ~  Ust. Abu Umar Raih Gelar, Lc. 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;


