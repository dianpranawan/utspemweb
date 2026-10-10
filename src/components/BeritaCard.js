import Link from "next/link";

export default function BeritaCard({ item }) {
  return (
    <article className="group flex flex-col">
      <Link href={`/berita/${item.id}`} className="relative block overflow-hidden rounded bg-ink-200">
        <img
          src={item.gambar}
          alt={item.judul}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700"
        />
        <span className="absolute left-3 bottom-3 bg-white text-pine-900 text-xs font-semibold px-2 py-1 rounded-sm">
          {item.kategori}
        </span>
      </Link>
      <p className="mt-4 text-sm text-ink-500">{item.tanggal}</p>
      <h3 className="text-xl font-semibold mt-1 leading-snug group-hover:text-pine-600">{item.judul}</h3>
      <p className="mt-2 text-ink-600 text-sm flex-1">{item.ringkasan}</p>
      <Link
        href={`/berita/${item.id}`}
        className="mt-3 self-start font-semibold text-pine-800 underline underline-offset-4 decoration-brass-400 hover:decoration-pine-800"
      >
        Baca selengkapnya
      </Link>
    </article>
  );
}