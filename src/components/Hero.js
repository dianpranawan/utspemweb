import Link from "next/link";

const FOTO = "/yadepan.jpg";

export default function Hero() {
  return (
    <section className="relative text-white bg-pine-950 overflow-hidden">
      {}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${FOTO}")` }}
      />
      {}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,33,28,0.92) 0%, rgba(15,33,28,0.70) 38%, rgba(15,33,28,0.25) 70%, rgba(15,33,28,0.05) 100%)",
        }}
      />
      {}
      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{ background: "linear-gradient(to top, rgba(15,33,28,0.9), transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-5 min-h-[30rem] md:min-h-[36rem] flex flex-col justify-center pt-16 md:pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="inline-block border-l-4 border-brass-400 pl-3 text-pine-100 font-medium">
            Selamat datang di SMA Negeri 3 Salatiga
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1]">
            Tempat siswa Salatiga belajar berpikir, berkarya, dan bertanggung jawab
          </h1>
          <p className="mt-6 text-lg text-pine-100 max-w-xl leading-relaxed">
            Kami mendampingi siswa menemukan minat, meraih prestasi, dan siap melanjutkan ke perguruan tinggi.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/about"
              className="bg-brass-400 text-pine-950 font-semibold px-7 py-3.5 rounded hover:bg-brass-300 transition-colors duration-200 shadow-lg"
            >
              Kenali sekolah kami
            </Link>
            <Link
              href="/berita"
              className="font-semibold underline underline-offset-8 decoration-2 decoration-brass-400 hover:decoration-white transition-all duration-200"
            >
              Baca berita terbaru
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}