import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";
import { berita } from "@/data/berita";

export default async function DetailBerita({ params }) {
  const { id } = await params;
  const item = berita.find((b) => b.id === Number(id));

  if (!item) {
    return (
      <main className="max-w-3xl mx-auto px-5 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Berita tidak ditemukan</h1>
        <Link href="/berita" className="text-brass-600 font-semibold hover:underline">
          Kembali ke daftar berita
        </Link>
      </main>
    );
  }

  const lainnya = berita.filter((b) => b.id !== item.id).slice(0, 3);

  return (
    <main className="max-w-6xl mx-auto px-5 py-12">
      <article className="max-w-3xl mx-auto">
        <Link href="/berita" className="text-sm font-semibold text-ink-600 hover:text-brass-600">
          ‹ Kembali ke berita
        </Link>
        <div className="flex items-center gap-2 text-sm mt-6">
          <span className="bg-brass-100 text-brass-800 font-semibold px-2 py-1 rounded">{item.kategori}</span>
          <span className="text-ink-500">{item.tanggal}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">{item.judul}</h1>
        <img src={item.gambar} alt={item.judul} className="w-full h-64 md:h-96 object-cover rounded-xl bg-ink-200 mb-6" />
        <p className="text-lg text-ink-700 leading-relaxed">{item.isi}</p>
      </article>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Berita lainnya</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lainnya.map((b) => (
            <BeritaCard key={b.id} item={b} />
          ))}
        </div>
      </section>
    </main>
  );
}