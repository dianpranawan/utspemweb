"use client";
import { useState } from "react";
import BeritaCard from "./BeritaCard";
import { berita, kategori } from "@/data/berita";

export default function BeritaList() {
  const [cari, setCari] = useState("");
  const [pilih, setPilih] = useState("Semua");

  const hasil = berita.filter(
    (b) =>
      (pilih === "Semua" || b.kategori === pilih) &&
      b.judul.toLowerCase().includes(cari.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-ink-200 mb-6">
        <div className="flex gap-6 overflow-x-auto">
          {kategori.map((k) => (
            <button
              key={k}
              onClick={() => setPilih(k)}
              className={`pb-3 -mb-px border-b-2 font-semibold whitespace-nowrap ${
                pilih === k
                  ? "border-brass-500 text-pine-900"
                  : "border-transparent text-ink-500 hover:text-pine-800"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
        <input
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          placeholder="Cari judul berita"
          className="w-full md:w-72 mb-3 bg-white border border-ink-300 rounded px-4 py-2 focus:outline-none focus:border-pine-600 focus:ring-2 focus:ring-pine-200"
        />
      </div>

      <p className="text-sm text-ink-500 mb-8">
        Menampilkan {hasil.length} dari {berita.length} berita
      </p>

      {hasil.length === 0 ? (
        <p className="text-center text-ink-500 py-16">
          Tidak ada berita yang cocok. Coba kata kunci atau kategori lain.
        </p>
      ) : (
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {hasil.map((item) => (
            <BeritaCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}