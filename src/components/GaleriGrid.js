"use client";
import { useEffect, useState } from "react";

export default function GaleriGrid({ foto }) {
  const [idx, setIdx] = useState(null);
  const tutup = () => setIdx(null);
  const geser = (d) => setIdx((i) => (i + d + foto.length) % foto.length);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") tutup();
      if (e.key === "ArrowRight") geser(1);
      if (e.key === "ArrowLeft") geser(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {foto.map((f, i) => (
          <button key={f.src} onClick={() => setIdx(i)} className="overflow-hidden rounded-xl bg-ink-200 group">
            <img src={f.src} alt={f.ket} className="w-full h-44 md:h-56 object-cover group-hover:scale-110 transition duration-500" />
          </button>
        ))}
      </div>

      {idx !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={tutup}>
          <button onClick={tutup} className="absolute top-4 right-5 text-white text-3xl" aria-label="Tutup">✕</button>
          <button
            onClick={(e) => { e.stopPropagation(); geser(-1); }}
            className="absolute left-3 text-white text-4xl px-3"
            aria-label="Sebelumnya"
          >‹</button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-3xl w-full">
            <img src={foto[idx].src} alt={foto[idx].ket} className="w-full max-h-[75vh] object-contain rounded-lg" />
            <figcaption className="text-white text-center mt-3">{foto[idx].ket}</figcaption>
          </figure>
          <button
            onClick={(e) => { e.stopPropagation(); geser(1); }}
            className="absolute right-3 text-white text-4xl px-3"
            aria-label="Berikutnya"
          >›</button>
        </div>
      )}
    </>
  );
}