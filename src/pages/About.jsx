import React from "react";

const About = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="hero-section pt-32 pb-20 text-white"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Tentang Tunas Kebaikan
            </h1>
            <p className="text-xl sm:text-2xl mb-8">
              Komunitas yang berkomitmen untuk menumbuhkan nilai-nilai kebaikan dalam masyarakat melalui pendidikan dan dakwah Islam
            </p>
            <a
              href="#visi-misi"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              Pelajari Lebih Lanjut <i className="ri-arrow-down-line ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1529333166447-4f1c5c9a0b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Komunitas Tunas Kebaikan"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Siapa Kami?</h2>
                <p className="text-gray-600 mb-6">
                  Tunas Kebaikan adalah komunitas dakwah Islam yang didirikan pada tahun 2015 dengan tujuan menumbuhkan nilai-nilai kebaikan dalam masyarakat melalui pendidikan agama yang moderat dan inklusif.
                </p>
                <p className="text-gray-600 mb-6">
                  Kami percaya bahwa setiap individu memiliki potensi untuk menjadi agen perubahan positif dalam masyarakat. Dengan pendekatan yang ramah dan berbasis kasih sayang, kami berusaha menyebarkan nilai-nilai Islam yang rahmatan lil 'alamin.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-green-50 text-green-800 px-4 py-2 rounded-full flex items-center">
                    <i className="ri-team-line mr-2"></i>
                    <span>500+ Anggota</span>
                  </div>
                  <div className="bg-green-50 text-green-800 px-4 py-2 rounded-full flex items-center">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span>10 Kota</span>
                  </div>
                  <div className="bg-green-50 text-green-800 px-4 py-2 rounded-full flex items-center">
                    <i className="ri-book-line mr-2"></i>
                    <span>100+ Kajian</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="visi-misi" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi & Misi Kami</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="ri-eye-line text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Visi</h3>
              </div>
              <p className="text-gray-600 pl-4 sm:pl-16">
                "Menjadi komunitas yang menjadi garda terdepan dalam menumbuhkan generasi muslim yang berakhlak mulia, berwawasan luas, dan berkontribusi positif bagi masyarakat."
              </p>
            </div>
            {/* Mission */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="mission-card bg-white p-6 rounded-xl shadow-md transition duration-300">
                <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                  <i className="ri-lightbulb-line text-green-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Pendidikan</h3>
                <p className="text-gray-600">
                  Menyelenggarakan kajian dan program pendidikan Islam yang mudah dipahami dan aplikatif dalam kehidupan sehari-hari.
                </p>
              </div>
              <div className="mission-card bg-white p-6 rounded-xl shadow-md transition duration-300">
                <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                  <i className="ri-heart-line text-green-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sosial</h3>
                <p className="text-gray-600">
                  Menggerakkan program sosial untuk membantu masyarakat kurang mampu dan membangun solidaritas sosial.
                </p>
              </div>
              <div className="mission-card bg-white p-6 rounded-xl shadow-md transition duration-300">
                <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                  <i className="ri-community-line text-green-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Dakwah</h3>
                <p className="text-gray-600">
                  Menyebarkan dakwah Islam dengan cara yang bijak, moderat, dan sesuai dengan konteks masyarakat modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sejarah Kami</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto relative timeline pl-4 sm:pl-12">
            {/* Timeline Item 1 */}
            <div className="relative mb-12 timeline-item">
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center mb-2">
                  <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    2015
                  </span>
                  <h3 className="ml-4 text-xl font-semibold text-gray-800">
                    Pendirian
                  </h3>
                </div>
                <p className="text-gray-600">
                  Tunas Kebaikan didirikan oleh sekelompok mahasiswa dan pemuda muslim di Jakarta dengan tujuan membentuk wadah dakwah yang relevan bagi generasi muda.
                </p>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="relative mb-12 timeline-item">
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center mb-2">
                  <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    2017
                  </span>
                  <h3 className="ml-4 text-xl font-semibold text-gray-800">
                    Ekspansi Regional
                  </h3>
                </div>
                <p className="text-gray-600">
                  Komunitas mulai berkembang ke kota-kota lain di Indonesia dengan membentuk cabang di Bandung, Surabaya, dan Yogyakarta.
                </p>
              </div>
            </div>
            {/* Timeline Item 3 */}
            <div className="relative mb-12 timeline-item">
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center mb-2">
                  <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    2019
                  </span>
                  <h3 className="ml-4 text-xl font-semibold text-gray-800">
                    Program Unggulan
                  </h3>
                </div>
                <p className="text-gray-600">
                  Meluncurkan program "Kajian Rutin Pekanan" dan "Bina Akhlak Remaja" yang menjadi program unggulan komunitas.
                </p>
              </div>
            </div>
            {/* Timeline Item 4 */}
            <div className="relative timeline-item">
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center mb-2">
                  <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    2023
                  </span>
                  <h3 className="ml-4 text-xl font-semibold text-gray-800">
                    Digitalisasi
                  </h3>
                </div>
                <p className="text-gray-600">
                  Memperluas jangkauan dakwah melalui platform digital dengan meluncurkan website, podcast, dan konten edukatif di media sosial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Inti Kami</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Ahmad Fauzi"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Ahmad Fauzi</h3>
              <p className="text-green-600 font-medium mb-4">Ketua Umum</p>
              <p className="text-gray-600">
                Alumni Universitas Indonesia, aktif dalam dakwah kampus sejak 2010 dan menjadi inisiator berdirinya Tunas Kebaikan.
              </p>
              <div className="flex justify-center mt-4 space-x-3">
                <a href="#" className="text-gray-500 hover:text-green-600 transition">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600 transition">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600 transition">
                  <i className="ri-instagram-line text-xl"></i>
                </a>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Siti Aminah"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Siti Aminah</h3>
              <p className="text-green-600 font-medium mb-4">Sekretaris Jenderal</p>
              <p className="text-gray-600">
                Lulusan UIN Jakarta dengan spesialisasi dalam pengembangan program pendidikan Islam untuk remaja dan keluarga.
              </p>
              <div className="flex justify-center mt-4 space-x-3">
                <a href="#" className="text-gray-500 hover:text-green-600 transition">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600 transition">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600 transition">
                  <i className="ri-instagram-line text-xl"></i>
                </a>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Rizky Pratama"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Rizky Pratama</h3>
              <p className="text-green-600 font-medium mb-4">Bendahara</p>
              <p className="text-gray-600">
                Professional di bidang keuangan dengan passion besar dalam pengelolaan program sosial dan pemberdayaan masyarakat.
              </p>
              <div className="flex justify-center mt-4 space-x-3">
                <a href="#" className="text-gray-500 hover:text-green-600 transition">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600 transition">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600 transition">
                  <i className="ri-instagram-line text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Bergabunglah Dengan Kami</h2>
            <p className="text-xl mb-8 text-green-100">
              Jadilah bagian dari perjalanan kami dalam menyebarkan kebaikan dan membangun masyarakat yang lebih baik.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="inline-block bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Daftar Sekarang <i className="ri-arrow-right-line ml-2"></i>
              </a>
              <a
                href="#"
                className="inline-block border-2 border-white text-white hover:bg-green-700 font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src="https://via.placeholder.com/150x50?text=Tunas+Kebaikan"
                alt="Logo Tunas Kebaikan"
                className="h-8 mb-4"
              />
              <p className="text-gray-400">
                Komunitas Tunas Kebaikan - Menumbuhkan nilai-nilai kebaikan dalam masyarakat melalui pendidikan dan dakwah Islam.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Kajian
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Artikel
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="ri-map-pin-line mr-2"></i>
                  <span>Jl. Kebaikan No. 123, Jakarta</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  <span>info@tunaskebaikan.id</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  <span>+62 812 3456 7890</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Media Sosial</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <i className="ri-twitter-fill"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <i className="ri-youtube-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 Tunas Kebaikan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default About;
