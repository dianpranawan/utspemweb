import ProfilTabs from "@/components/ProfilTabs";

export const metadata = { title: "About | SMA Negeri 03 Salatiga" };

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-5 py-12">
      <h1 className="text-4xl font-bold mb-8">Tentang sekolah</h1>
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <img src="/dpn.jpg" alt="Gedung sekolah" className="w-full rounded-xl bg-ink-200 object-cover" />
        <div>
          <p className="text-lg text-ink-700 leading-relaxed mb-6">
            SMA Negeri 03 Salatiga adalah sekolah menengah atas negeri yang berfokus pada prestasi akademik,
            karakter, dan kegiatan di luar kelas. Pilih tab di bawah untuk mengenal sekolah lebih dekat.
          </p>
          <ProfilTabs />
        </div>
      </div>
    </main>
  );
}