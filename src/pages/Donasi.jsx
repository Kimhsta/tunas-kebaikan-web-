// src/pages/Donasi.jsx
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheck,
  faCheckCircle,
  faHeart,
  faUniversity,
  faQrcode,
  faWallet,
  faArrowRight,
  faCopy,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons"
import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons"

const Donasi = () => {
  const [selectedPayment, setSelectedPayment] = useState(null)
  const [copiedAccount, setCopiedAccount] = useState(null)

  // Function to handle copying bank account numbers
  const handleCopyBankNumber = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber.replace(/\s/g, ""))
    setCopiedAccount(accountNumber)
    setTimeout(() => setCopiedAccount(null), 2000)
  }

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute("href")
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }

    document.querySelectorAll('a[href^="#"]').forEach((a) =>
      a.addEventListener("click", handleAnchorClick)
    )
    return () =>
      document.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.removeEventListener("click", handleAnchorClick)
      )
  }, [])

  return (
    <div className="bg-gray-50">
      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Program Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Donasi Anda akan disalurkan untuk berbagai program dakwah dan pendidikan berikut:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden donation-card transition duration-300">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Kajian Rutin"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Dakwah
                  </span>
                  <span className="text-gray-500 text-sm">Rp 5.000.000 terkumpul</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kajian Rutin Pekanan</h3>
                <p className="text-gray-600 mb-4">
                  Pembiayaan kajian rutin di berbagai masjid dengan tema-tema aktual seputar Islam.
                </p>
                <div className="progress-bar mb-2">
                  <div className="progress-fill" style={{ width: "65%" }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>65% tercapai</span>
                  <span>Target: Rp 8.000.000</span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-300">
                  Donasi <FontAwesomeIcon icon={faHeart} className="ml-1" />
                </button>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden donation-card transition duration-300">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Pendidikan Anak"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Pendidikan
                  </span>
                  <span className="text-gray-500 text-sm">Rp 12.000.000 terkumpul</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">TPQ Tunas Kebaikan</h3>
                <p className="text-gray-600 mb-4">
                  Pendidikan Al-Qur'an untuk anak-anak dengan metode yang menyenangkan.
                </p>
                <div className="progress-bar mb-2">
                  <div className="progress-fill" style={{ width: "80%" }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>80% tercapai</span>
                  <span>Target: Rp 15.000.000</span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-300">
                  Donasi <FontAwesomeIcon icon={faHeart} className="ml-1" />
                </button>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden donation-card transition duration-300">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Beasiswa Santri"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Beasiswa
                  </span>
                  <span className="text-gray-500 text-sm">Rp 7.500.000 terkumpul</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beasiswa Tahfizh</h3>
                <p className="text-gray-600 mb-4">
                  Beasiswa untuk santri berprestasi yang ingin menghafal Al-Qur'an.
                </p>
                <div className="progress-bar mb-2">
                  <div className="progress-fill" style={{ width: "30%" }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>30% tercapai</span>
                  <span>Target: Rp 25.000.000</span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-300">
                  Donasi <FontAwesomeIcon icon={faHeart} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section id="donasi" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-green-50 rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-green-700 text-white p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Donasi Dakwah</h2>
                <p className="mb-6">
                  "Perumpamaan orang yang menginfakkan hartanya di jalan Allah seperti sebutir biji
                  yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji. Allah
                  melipatgandakan bagi siapa yang Dia kehendaki, dan Allah Maha Luas, Maha
                  Mengetahui." (QS. Al-Baqarah: 261)
                </p>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xl mr-3" />
                  <span>Donasi Anda akan disalurkan secara transparan</span>
                </div>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xl mr-3" />
                  <span>Laporan keuangan tersedia setiap bulan</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xl mr-3" />
                  <span>Resit donasi akan dikirim via email</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-green-700 mb-6">Form Donasi</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="nama">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="nama"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Masukkan email Anda"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="nominal">
                      Nominal Donasi (Rp)
                    </label>
                    <input
                      type="number"
                      id="nominal"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Masukkan nominal"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Pilih Program</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>-- Pilih Program --</option>
                      <option>Kajian Rutin Pekanan</option>
                      <option>TPQ Tunas Kebaikan</option>
                      <option>Beasiswa Tahfizh</option>
                      <option>Program Umum (Disalurkan ke yang paling membutuhkan)</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Metode Pembayaran</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        className={`border py-2 rounded-lg hover:bg-gray-100 focus:bg-green-100 focus:border-green-500 ${
                          selectedPayment === "visa" ? "bg-green-100 border-green-500" : ""
                        }`}
                        onClick={() => setSelectedPayment("visa")}
                      >
                        <FontAwesomeIcon icon={faCcVisa} size="2x" className="text-blue-800" />
                      </button>
                      <button
                        type="button"
                        className={`border py-2 rounded-lg hover:bg-gray-100 focus:bg-green-100 focus:border-green-500 ${
                          selectedPayment === "mastercard" ? "bg-green-100 border-green-500" : ""
                        }`}
                        onClick={() => setSelectedPayment("mastercard")}
                      >
                        <FontAwesomeIcon
                          icon={faCcMastercard}
                          size="2x"
                          className="text-red-800"
                        />
                      </button>
                      <button
                        type="button"
                        className={`border py-2 rounded-lg hover:bg-gray-100 focus:bg-green-100 focus:border-green-500 ${
                          selectedPayment === "bank" ? "bg-green-100 border-green-500" : ""
                        }`}
                        onClick={() => setSelectedPayment("bank")}
                      >
                        <FontAwesomeIcon
                          icon={faUniversity}
                          size="2x"
                          className="text-green-700"
                        />
                      </button>
                      <button
                        type="button"
                        className={`border py-2 rounded-lg hover:bg-gray-100 focus:bg-green-100 focus:border-green-500 ${
                          selectedPayment === "paypal" ? "bg-green-100 border-green-500" : ""
                        }`}
                        onClick={() => setSelectedPayment("paypal")}
                      >
                        <FontAwesomeIcon icon={faCcPaypal} size="2x" className="text-blue-500" />
                      </button>
                      <button
                        type="button"
                        className={`border py-2 rounded-lg hover:bg-gray-100 focus:bg-green-100 focus:border-green-500 ${
                          selectedPayment === "qrcode" ? "bg-green-100 border-green-500" : ""
                        }`}
                        onClick={() => setSelectedPayment("qrcode")}
                      >
                        <FontAwesomeIcon icon={faQrcode} size="2x" className="text-purple-600" />
                      </button>
                      <button
                        type="button"
                        className={`border py-2 rounded-lg hover:bg-gray-100 focus:bg-green-100 focus:border-green-500 ${
                          selectedPayment === "wallet" ? "bg-green-100 border-green-500" : ""
                        }`}
                        onClick={() => setSelectedPayment("wallet")}
                      >
                        <FontAwesomeIcon icon={faWallet} size="2x" className="text-orange-500" />
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                  >
                    Lanjutkan Pembayaran{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Accounts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
              Rekening Donasi
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  bankName: "Bank Syariah Indonesia",
                  an: "Yayasan Tunas Kebaikan",
                  number: "7123 4567 8910",
                  logo: "https://via.placeholder.com/50",
                },
                {
                  bankName: "Bank Mandiri",
                  an: "Yayasan Tunas Kebaikan",
                  number: "1234 5678 9012",
                  logo: "https://via.placeholder.com/50",
                },
                {
                  bankName: "Dana",
                  an: "Tunas Kebaikan Official",
                  number: "0812 3456 7890",
                  logo: "https://via.placeholder.com/50",
                },
              ].map(({ bankName, an, number, logo }) => (
                <div
                  key={number}
                  className="border rounded-lg p-4 hover:shadow-md transition duration-300"
                >
                  <div className="flex items-center mb-4">
                    <img src={logo} alt={bankName} className="w-10 h-10 mr-3" />
                    <div>
                      <h3 className="font-bold">{bankName}</h3>
                      <p className="text-sm text-gray-500">a.n. {an}</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="text-sm text-gray-600">Nomor Rekening</p>
                    <p className="font-mono text-lg font-bold">{number}</p>
                  </div>
                  <button
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded transition duration-300 flex items-center justify-center"
                    onClick={() => handleCopyBankNumber(number)}
                  >
                    {copiedAccount === number ? (
                      <>
                        <FontAwesomeIcon icon={faCheck} className="mr-2" /> Tersalin!
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faCopy} className="mr-2" /> Salin Nomor
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0 text-yellow-500">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Konfirmasi Donasi:</strong> Setelah transfer, harap
                    konfirmasi via WhatsApp ke 0812-3456-7890 dengan format:
                    Nama#Tanggal#Nominal#Bank Tujuan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Donate Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#donasi"
          className="floating-button bg-green-600 hover:bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition duration-300"
        >
          <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" />
        </a>
      </div>
    </div>
  )
}

export default Donasi
