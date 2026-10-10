import Link from "next/link";
import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import ProgramList from "@/components/ProgramList";
import { berita } from "@/data/berita";

const statistik = [
  { angka: 1050, suffix: "", label: "Siswa aktif" },
  { angka: 62, suffix: "", label: "Guru dan staf" },
  { angka: 48, suffix: "", label: "Prestasi tahun ini" },
  { angka: 95, suffix: "%", label: "Lulusan diterima PTN/PTS" },
];

export default function Home() {
  const [utama, ...lain] = berita.slice(0, 3);

  return (
    <main>
      <Hero />

      <section className="bg-white border-b border-ink-200">
        <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 md:divide-x divide-ink-200">
          {statistik.map((s) => (
            <div key={s.label} className="md:px-8 first:md:pl-0">
              <p className="font-head text-4xl md:text-5xl font-semibold text-pine-900">
                <Counter target={s.angka} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-ink-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-pine-900 leading-tight">
            Belajar, berkegiatan, dan berprestasi di satu sekolah
          </h2>
          <p className="mt-4 text-ink-600 leading-relaxed">
            Pilih salah satu bidang untuk melihat apa yang bisa siswa dapatkan di SMA Negeri 3 Salatiga.
          </p>
        </div>
        <div className="md:col-span-8">
          <ProgramList />
        </div>
      </section>

      <section className="bg-white border-y border-ink-200 py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-pine-900">Berita terbaru</h2>
            <Link href="/berita" className="font-semibold text-pine-800 underline underline-offset-4 decoration-brass-400 hover:decoration-pine-800">
              Lihat semua berita
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-10">
            <Link href={`/berita/${utama.id}`} className="group md:col-span-7">
              <div className="overflow-hidden rounded bg-ink-200">
                <img
                  src={utama.gambar}
                  alt={utama.judul}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-brass-600">{utama.kategori}</p>
              <h3 className="text-2xl md:text-3xl font-semibold mt-1 group-hover:text-pine-600">{utama.judul}</h3>
              <p className="mt-2 text-ink-600">{utama.ringkasan}</p>
            </Link>

            <div className="md:col-span-5 flex flex-col divide-y divide-ink-200">
              {lain.map((b) => (
                <Link key={b.id} href={`/berita/${b.id}`} className="group flex gap-4 py-5 first:pt-0">
                  <img src={b.gambar} alt={b.judul} className="w-28 h-24 object-cover rounded bg-ink-200 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-brass-600">{b.kategori}</p>
                    <h3 className="text-lg font-semibold leading-snug group-hover:text-pine-600">{b.judul}</h3>
                    <p className="text-sm text-ink-500 mt-1">{b.tanggal}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pine-100">
        <div className="max-w-6xl mx-auto px-5 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-pine-900">Ingin tahu lebih banyak tentang sekolah kami?</h2>
            <p className="mt-2 text-ink-600">Kirim pertanyaanmu, tim sekolah akan membalasnya.</p>
          </div>
          <Link href="/kontak" className="bg-pine-900 text-white font-semibold px-7 py-3 rounded hover:bg-pine-700 text-center">
            Hubungi kami
          </Link>
        </div>
      </section>
    </main>
  );
}