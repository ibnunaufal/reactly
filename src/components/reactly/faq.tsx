import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const Faq: React.FC = () => {
  const faqdata = [
    {
      question: "Apa itu MPP ?",
      answer: `Mengutip dari pernyataan Deputi “Pelayanan Publik bahwa Mal Pelayanan Publik merupakan generasi
      ketiga setelah konsep pelayanan publik satu atap dan satu pintu”. Mal Pelayanan Publik merupakan
      penggabungan dua konsep layanan yang berada di satu lokasi atau tempat berlangsungnya kegiatan, atau
      aktivitas kegiatan penyelenggaraan pelayanan publik atas barang, jasa dan/atau pelayanan
      administrasi yang merupakan perluasan fungsi pelayanan terpadu daerah serta pelayanan instansi
      vertikal, Badan Usaha Milik Negara/Badan Usaha Milik Daerah/Swasta dalam rangka menyediakan
      pelayanan yang cepat, mudah, terjangkau, aman dan nyaman dengan mengintegrasikan sistem pelayanan
      publik dimana pelayanan satu sama lain terdapat keterkaitan dalam satu lokasi atau gedung tertentu
      yang dikombinasikan dengan kegiatan jasa dan ekonomi lainnya.`,
    },
    // {
    //   question: "Mengapa Perlu MPP ?",
    //   answer: `MPP dibentuk berdasarkan tujuan dari : <br>
    //   1. Pemerintah
    //   <br><br><i class="bi-check-circle"></i> Pembentukan MPP merupakan realisasi dari Program Prioritas
    //   Daerah Kota Cilegon “Peningkatan
    //   kualitas pelayanan publik” untuk mencapai Misi Ke I “Menghadirkan Pemerintahan Daerah yang
    //   Profesional dan Akuntabel” dalam rangka mewujudkan visi Kota Cilegon Baru, Modern dan Bermartabat.
    //   <br><br><i class="bi-check-circle"></i> Meningkatkan hasil evaluasi pelayanan publik Pemerintah Kota
    //   Cilegon
    //   dari Kementerian PANRB, dan
    //   hasil survei kepatuhan terhadap UU 25 Tahun 2009 dari lembaga pengawas pelayanan publik OMBUDSMAN.
    //   <br><br><i class="bi-check-circle"></i> Menjadi icon pelayanan daerah yang berimplikasi terhadap
    //   peningkatan
    //   ekonomi dan daya saing
    //   daerah.
    //   <br><br>
    //   2. Masyarakat
    //   <br><br><i class="bi-check-circle"></i> Memberikan kemudahan masyarakat dalam mengakses layanan
    //   publik
    //   melalui konsep
    //   layanan “one stop services” dari berbagai macam instansi pemerintah.
    //   <br><br><i class="bi-check-circle"></i> Meningkatkan kepuasan masyarakat yang tercermin dalam Indeks
    //   Kepuasan Masyarakat. <br><br>

    //   3. Instansi Gerai Pelayanan
    //   <br><br><i class="bi-check-circle"></i> Meningkatkan efisiensi biaya operasional penyelenggaraan
    //   pelayanan (bebas biaya pembangunan,
    //   sewa
    //   dan pemeliharaan, listrik dan air serta sarana lain).
    //   <br><br><i class="bi-check-circle"></i> Meningkatkan jumlah gerai layanan.
    //   <br><br><i class="bi-check-circle"></i> Meningkatkan hasil evaluasi pelayanan publik dari
    //   Kementerian PANRB, dan hasil survei kepatuhan
    //   terhadap UU 25 Tahun 2009 dari lembaga pengawas pelayanan publik OMBUDSMAN.`,
    // },
    {
      question: "Dasar Hukum Penyelenggaraan Mal Pelayanan Publik?",
      answer:
        [
          "Undang-undang Nomor 15 Tahun 1999 tentang tentang Pembentukan Kotamadya Daerah Tingkat II Depok dan Kotamadya Daerah Tingkat II Cilegon.",
          "Undang-undang Nomor 25 Tahun 2009 tentang Pelayanan Publik",
          "Undang-undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah sebagaimana telah diubah beberapa kali terakhir dengan Undang-undang Nomor 9 Tahun 2015 tentang Perubahan Kedua Atas Undang-undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah.",
          "Peraturan Pemerintah Nomor 96 Tahun 2012 tentang Pelaksanaan Undang-Undang Nomor 25 Tahun 2009 tentang Pelayanan Publik.",
          "Peraturan Presiden Nomor 89 Tahun 2021 tentang Penyelenggaraan Mal Pelayanan Publik.",
          "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 92 Tahun 2021 tentang Petunjuk Teknis Penyelenggaraan Mal Pelayanan Publik.",
          "Peraturan Daerah Kota Cilegon Nomor 9 Tahun 2018 tentang Pelayanan Publik.",
          "Peraturan Daerah Kota Cilegon Nomor 1 Tahun 2022 tentang Pembentukan Perangkat Daerah dan Susunan Perangkat Daerah.",
          "Peraturan Wali Kota Cilegon Nomor 41 Tahun 2022 tentang Penyelenggaraan Mal Pelayanan Publik Kota Cilegon.",
          "Keputusan Wali Kota Nomor : 503 / Kep.204 – DPMPTSP / 2022 tentang Tata Tertib Penyelenggaraan Mal Pelayanan Publik Kota Cilegon.",
          "Keputusan Wali Kota Nomor : 503 / Kep.162 – DPMPTSP / 2022 tentang Pembentukan Kelembagaan, Susunan Organisasi, dan Tugas Fungsi Mal Pelayanan Publik Kota Cilegon.",
          "Keputusan Wali Kota Cilegon Nomor : 503 / Kep.159 – DPMPTSP / 2022 tentang Penetapan Lokasi Mal Pelayanan Publik Kota Cilegon.",
          "Keputusan Wali Kota Cilegon Nomor 503 / Kep.205 – DPMPTSP / 2022 tentang Logo Mal Pelayanan Publik Kota Cilegon.",
          "Keputusan Wali Kota Cilegon Nomor : 503 / Kep.248 DPMPTSP / 2022 tentang Musik Tema Mal Pelayanan Publik Kota Cilegon.",
          "Keputusan Wali Kota Cilegon Nomor 508 / Kep. – ORB / 2022 tentang Standar Operasional Prosedur Penyelenggaraan Mal Pelayanan Publik Kota Cilegon.",
          "Keputusan Kepala DPMPTSP Kota Cilegon Nomor : : 503 / Kep.40 – DPMPTSP / 2022 tentang Peta Proses Bisnis Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu.",
          "Keputusan Kepala DPMPTSP Kota Cilegon Nomor : 503 / Kep.41 – DPMPTSP / 2022 tentang Standar Operasional Prosedur Penyelenggaraan Mal Pelayanan Publik Kota Cilegon."
        ],
    },
    {
      question: "Apa Saja Fasilitas di Mal Pelayanan Publik Kota Cilegon?",
      answer:
      ["Gerai Pelayanan",
      "Ruang Rapat",
      "Ruang Tunggu Prioritas",
      "Ruang Tunggu Pelayanan",
      "Ruang Konsultasi",
      "Ruang Pengaduan",
      "Ruang Laktasi",
      "Ruang Bermain Anak",
      "Ruang Tunggu Difabel",
      "Pojok Baca / Perpustakaan Digital",
      "Balai Nikah",
      "Kantin / Pojok UMKM",
      "Toilet",
      "Parkir"]
    },
    {
      question: "Dimana Lokasi Mal Pelayanan Publik Kota Cilegon berada ?",
      answer: "Gedung Graha Edhi Praja Lantai 1, Jalan Jenderal Sudirman No. 2 Kelurahan Ramanuju Kecamatan Purwakarta Kota Cilegon 42431",
    }
  ];

  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {/* check if item.answer is array show it with ol and li, if its just a string show it normally */}
                    {
                      item.answer instanceof Array ? (
                        <ol className="list-decimal list-inside">
                          {item.answer.map((answer) => (
                            <li key={answer} className="mb-2">{answer}</li>
                          ))}
                        </ol>
                      ) : (
                        <p className="mb-2">{item.answer}</p>
                      )
                    }
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Faq;
