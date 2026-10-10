import BeritaList from "@/components/BeritaList";

export const metadata = { title: "Berita | SMA Negeri XX Semarang" };

export default function BeritaPage() {
  return (
    <main className="max-w-6xl mx-auto px-5 py-12">
      <h1 className="text-4xl font-bold mb-8">Berita sekolah</h1>
      <BeritaList />
    </main>
  );
}