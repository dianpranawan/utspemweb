import GaleriGrid from "@/components/GaleriGrid";
import { berita } from "@/data/berita";

export const metadata = { title: "Galeri | SMA Negeri 03 Salatiga" };

export default function GaleriPage() {
  const foto = [
    { src: "/futsal.png", ket: "Gedung SMA Negeri 03 Salatiga" },
    { src: "/yaw.png", ket: "Gedung SMA Negeri 03 Salatiga" },
     { src: "/sma.jpg", ket: "Gedung SMA Negeri 03 Salatiga" },
    ...berita.map((b) => ({ src: b.gambar, ket: b.judul })),
  ];

  return (
    <main className="max-w-6xl mx-auto px-5 py-12">
      <h1 className="text-4xl font-bold mb-2">Galeri</h1>
      <p className="text-ink-600 mb-8">Klik foto untuk memperbesar. Gunakan tombol panah untuk berpindah.</p>
      <GaleriGrid foto={foto} />
    </main>
  );
}