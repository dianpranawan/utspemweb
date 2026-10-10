"use client";
import { useState } from "react";

const data = [
  {
    judul: "Akademik",
    teks: "Peminatan IPA, IPS, dan Bahasa dengan laboratorium dan perpustakaan yang menunjang belajar.",
    foto: [
      { src: "/akademik/kelas.jpeg", ket: "Kegiatan belajar di kelas" },
      { src: "/akademik/batik.jpeg", ket: "Kegiatan Belajar di Luar Kelas" },
      { src: "/akademik/ya.jpeg", ket: "Perpustakaan sekolah" },
    ],
  },
  {
    judul: "Ekstrakurikuler",
    teks: "Siswa bebas memilih kegiatan sesuai minat, dari kepemimpinan sampai seni dan olahraga.",
    foto: [
      { src: "/ekskul/paskibra.png", ket: "Paskibra" },
      { src: "/ekskul/pramuka.jpg", ket: "Pramuka" },
      { src: "/ekskul/basket.png", ket: "Basket" },
      { src: "/ekskul/cheerleader.png", ket: "Cheerleader" },
      { src: "/ekskul/bola.png", ket: "Sepak Bola" },
      { src: "/ekskul/pmr.png", ket: "PMR" },
    ],
  },
  {
    judul: "Prestasi",
    teks: "Siswa rutin mengikuti olimpiade sains, lomba seni, dan kejuaraan olahraga dari tingkat kota sampai provinsi.",
    foto: [
      { src: "/prestasi/1.png", ket: "Juara 1 & 2 POPDA Basket 2025 Putra Putri" },
      { src: "/prestasi/2.png", ket: "Juara 1 POPDA Voli 2025 " },
      { src: "/prestasi/3.png", ket: "Juara POPDA di GOR Jatidiri" },
    ],
  },
  {
    judul: "Fasilitas",
    teks: "Lapangan, aula serbaguna, taman, dan akses internet di area sekolah.",
    foto: [
      { src: "/fasillitas/lapangan.jpeg", ket: "Lapangan" },
      { src: "/fasillitas/aula.jpeg", ket: "Aula serbaguna" },
      { src: "/fasillitas/taman.jpeg", ket: "Taman" },
    ],
  },
];

function Foto({ src, ket }) {
  const [gagal, setGagal] = useState(false);

  return (
    <figure className="group">
      <div className="overflow-hidden rounded bg-pine-100 aspect-[4/3]">
        {gagal ? (
          <div className="h-full w-full flex items-center justify-center p-3 text-center text-sm text-pine-600">
            {ket}
          </div>
        ) : (
          <img
            src={src}
            alt={ket}
            onError={() => setGagal(true)}
            className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
          />
        )}
      </div>
      <figcaption className="mt-2 text-sm font-medium text-ink-700">{ket}</figcaption>
    </figure>
  );
}

export default function ProgramList() {
  const [buka, setBuka] = useState(1); // 1 = Ekstrakurikuler terbuka saat halaman dimuat

  return (
    <div className="border-t border-ink-200">
      {data.map((d, i) => {
        const o = buka === i;
        return (
          <div key={d.judul} className="border-b border-ink-200">
            <button
              onClick={() => setBuka(o ? null : i)}
              aria-expanded={o}
              className="group w-full flex items-center justify-between py-5 text-left"
            >
              <span className="font-head text-2xl font-semibold text-pine-900 group-hover:text-pine-600">
                {d.judul}
              </span>
              <span
                className={`h-8 w-8 rounded-full border flex items-center justify-center text-lg transition duration-300 ${
                  o ? "bg-pine-900 text-white border-pine-900 rotate-45" : "border-ink-300 text-ink-700"
                }`}
              >
                +
              </span>
            </button>

            <div className={`grid transition-all duration-500 ${o ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="max-w-xl text-ink-600 leading-relaxed">{d.teks}</p>
                <div className="mt-5 pb-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {d.foto.map((f) => (
                    <Foto key={f.src} src={f.src} ket={f.ket} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}