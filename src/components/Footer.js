import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pine-950 text-pine-100 border-t-4 border-brass-500">
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-head text-2xl font-semibold text-white">SMA Negeri 3 Salatiga</p>
          <p className="mt-3 max-w-xs">Jl. Kartini No. 34, Kec. Sidorejo, Kota Salatiga, Jawa Tengah 50711</p>
          <p className="mt-1">Telepon (0298) 323300</p>
        </div>
        <div className="md:col-span-3 md:col-start-7">
          <p className="font-semibold text-white mb-3">Halaman</p>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-brass-300">About</Link></li>
            <li><Link href="/berita" className="hover:text-brass-300">Berita</Link></li>
            <li><Link href="/galeri" className="hover:text-brass-300">Galeri</Link></li>
            <li><Link href="/kontak" className="hover:text-brass-300">Kontak</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="font-semibold text-white mb-3">Jam layanan</p>
          <p>Senin sampai Jumat</p>
          <p>07.00 - 15.30 WIB</p>
        </div>
      </div>
      <p className="border-t border-pine-800 text-center text-sm py-5">
        © 2026 SMA Negeri 3 Salatiga
      </p>
    </footer>
  );
}