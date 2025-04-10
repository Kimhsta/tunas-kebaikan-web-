import Logo from '../../public/logokepala.svg';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 font-poppins text-sm sm:text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Kolom 1: Logo dan Deskripsi */}
          <div>
            <img src={Logo} alt="Logo Tunas Kebaikan" className="h-16 sm:h-20 mb-4" />
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              <strong className="text-white">Tunas Kebaikan</strong> adalah komunitas yang
              menumbuhkan nilai-nilai Islam melalui pendidikan, dakwah, dan aksi sosial.
            </p>
          </div>

          {/* Kolom 2: Kontak */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Kontak Kami</h3>
            <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
              <li className="flex items-center">
                <i className="ri-mail-line mr-3 text-lg"></i>
                tunas_kebaikan@gmail.com
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line mr-3 text-lg"></i>
                +62 812 3456 7890
              </li>
            </ul>
          </div>

          {/* Kolom 3: Media Sosial */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                { href: 'https://web.facebook.com/profile.php?id=100076263575730', icon: 'ri-facebook-fill', label: 'Facebook' },
                { href: 'https://t.me/tunaskebaikan', icon: 'ri-telegram-fill', label: 'Telegram' },
                { href: 'https://www.instagram.com/tunas_kebaikan_/', icon: 'ri-instagram-line', label: 'Instagram' },
                { href: 'https://www.youtube.com/@TunasKebaikan-d3q', icon: 'ri-youtube-fill', label: 'YouTube' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-lime-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  <i className={`${item.icon} text-base sm:text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-5 pb-4 text-center text-gray-500 text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()} Tunas Kebaikan. All rights reserved. | Made with ❤️ by Mas Mahes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
