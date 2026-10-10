"use client";
import { useState } from "react";

const tab = {
  Sejarah: "SMA Negeri 03 Salatiga berdiri pada tahun 1991 dan berkembang menjadi salah satu sekolah unggulan di Kota Salatiga. Dari satu gedung sederhana, kini sekolah memiliki laboratorium, perpustakaan, dan lapangan olahraga yang menunjang belajar siswa. SMA Negeri 3 Salatiga adalah Eks SPG Negeri Salatiga, sesuai dengan Keputusan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor: 0519/O/191 tanggal 5 September 1991 tentang pengalihan fungsi Sekolah Pendidikan Guru (SPG) Negeri Salatiga menjadi SMA Negeri 3 Salatiga. Sejak penjajahan Jepang sekolah ini digunakan untuk Sihang Gakko. Pada jaman penjajahan Belanda, sekolah ini digunakan sebagai Gauverment Jongens Normal School. Tahun 1945 – 1947 digunakan untuk Sekolah Guru Laki-laki (SGL). Pada pendudukan Belanda tahun 1948 hingga tahun 1950 digunakan oleh tentara Belanda. Tahun 1950 – 1951 digunakan oleh Tentara Nasional. Tahun 1951 digunakan lagi untuk Sekolah Pendidikan Guru (SGB) hingga tahun 1960 dengan nama SGB Negeri 1. Tahun 1959 – 1960 dipakai bersama-sama oleh SGB Negeri 1 dan SGTK Negeri. Tahun 1960 – 1964 SGA dan SGTK diintegrasikan menjadi SPG hingga tahun 1991 dan pada tahun 1991 SPG Negeri Salatiga dialihfungsikan menjadi SMA 3 Salatiga.",
  Visi: "Unggul prestasi, serasi dalam budi pekerti, berdaya saing global, dan berwawasan lingkungan. Visi tersebut mencerminkan cita-cita sekolah yang berorientasi ke depan dengan memperhatikan potensi kekinian sesuai dengan norma dan harapan masyarakat. ",
  Misi: "Mewujudkan Sekolah Standar Nasional,meningkatkan prestasi akademik dan non akademik serta pengembangan kreativitas siswa (Multiple Intelligence), melakukan inovasi dalam proses pembelajaran, meningkatkan profesionalisme pendidik dan tenaga kependidikan, meningkatkan kemampuan berbahasa asing, meningkatkan ketakwaan terhadap Tuhan Yang Maha Esa, mewujudkan lingkungan sekolah yang menunjang suasana pembelajaran menyenangkan (Joyful Learning) yang demokratis, melaksanakan manajemen berbasis sekolah dan menggalang partisipasi masyarakat, mewujudkan tata krama dalam hubungan antar warga sekolah, membentuk peserta didik yang berakhlak dan berbudi pekerti luhur, mewujudkan sekolah hijau (Green School) yang nyaman, dan menyukseskan kelas akselerasi yang berkualitas dan berprestasi",
  Fasilitas: "Laboratorium komputer, laboratorium IPA, perpustakaan, aula serbaguna, lapangan basket, dan masjid sekolah.",
};

export default function ProfilTabs() {
  const [aktif, setAktif] = useState("Sejarah");
  return (
    <div className="bg-white border border-ink-200 rounded-xl overflow-hidden">
      <div className="flex overflow-x-auto border-b border-ink-200">
        {Object.keys(tab).map((t) => (
          <button
            key={t}
            onClick={() => setAktif(t)}
            className={`px-6 py-3 font-semibold whitespace-nowrap ${
              aktif === t ? "bg-ink-900 text-white" : "hover:bg-ink-100"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="p-6 text-ink-700 leading-relaxed">{tab[aktif]}</p>
    </div>
  );
}