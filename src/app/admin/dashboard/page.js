"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { berita as dataAwal, kategori } from "@/data/berita";

const KUNCI = "adminBerita";
const pilihanKategori = kategori.filter((k) => k !== "Semua");
const kosong = { judul: "", kategori: pilihanKategori[0], tanggal: "", gambar: "/berita1.jpg", ringkasan: "", isi: "" };

export default function Dashboard() {
  const router = useRouter();
  const [siap, setSiap] = useState(false);
  const [daftar, setDaftar] = useState([]);
  const [form, setForm] = useState(kosong);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("adminLogin") !== "true") {
      router.replace("/admin");
      return;
    }
    try {
      const simpan = localStorage.getItem(KUNCI);
      setDaftar(simpan ? JSON.parse(simpan) : dataAwal);
    } catch {
      setDaftar(dataAwal);
    }
    setSiap(true);
  }, [router]);

  function simpanDaftar(baru) {
    setDaftar(baru);
    localStorage.setItem(KUNCI, JSON.stringify(baru));
  }

  function ubah(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function kirim(e) {
    e.preventDefault();
    if (!form.judul.trim() || !form.isi.trim()) {
      setError("Judul dan isi berita wajib diisi.");
      return;
    }
    setError("");
    if (editId !== null) {
      simpanDaftar(daftar.map((b) => (b.id === editId ? { ...b, ...form } : b)));
    } else {
      const idBaru = daftar.length ? Math.max(...daftar.map((b) => b.id)) + 1 : 1;
      simpanDaftar([{ id: idBaru, ...form }, ...daftar]);
    }
    setForm(kosong);
    setEditId(null);
  }

  function mulaiEdit(b) {
    setEditId(b.id);
    setForm({
      judul: b.judul,
      kategori: b.kategori,
      tanggal: b.tanggal,
      gambar: b.gambar,
      ringkasan: b.ringkasan,
      isi: b.isi,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function hapus(id) {
    if (confirm("Hapus berita ini?")) simpanDaftar(daftar.filter((b) => b.id !== id));
  }

  function resetData() {
    if (confirm("Kembalikan semua berita ke data awal?")) {
      localStorage.removeItem(KUNCI);
      setDaftar(dataAwal);
    }
  }

  function logout() {
    localStorage.removeItem("adminLogin");
    router.push("/admin");
  }

  if (!siap) return <main className="p-10 text-center text-ink-500">Memuat...</main>;

  const input =
    "w-full border border-ink-300 rounded px-4 py-2 focus:outline-none focus:border-pine-600 focus:ring-2 focus:ring-pine-200";

  return (
    <main className="max-w-6xl mx-auto px-5 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-pine-900">Dashboard Admin</h1>
          <p className="text-ink-500">Kelola berita SMA Negeri 3 Salatiga</p>
        </div>
        <div className="flex gap-3">
          <Link href="/" className="border border-ink-300 px-4 py-2 rounded font-semibold hover:bg-ink-100">
            Lihat website
          </Link>
          <button onClick={logout} className="bg-pine-900 text-white px-4 py-2 rounded font-semibold hover:bg-pine-700">
            Logout
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="bg-white border border-ink-200 rounded-lg p-5">
          <p className="text-sm text-ink-500">Total berita</p>
          <p className="text-3xl font-semibold text-pine-900">{daftar.length}</p>
        </div>
        <div className="bg-white border border-ink-200 rounded-lg p-5">
          <p className="text-sm text-ink-500">Kategori terpakai</p>
          <p className="text-3xl font-semibold text-pine-900">{new Set(daftar.map((b) => b.kategori)).size}</p>
        </div>
        <div className="bg-white border border-ink-200 rounded-lg p-5">
          <p className="text-sm text-ink-500">Berita terbaru</p>
          <p className="font-semibold text-pine-900 line-clamp-2">{daftar[0]?.judul ?? "-"}</p>
        </div>
      </div>

      <form onSubmit={kirim} className="mt-10 bg-white border border-ink-200 rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-pine-900">
          {editId !== null ? "Edit berita" : "Tambah berita"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block font-semibold mb-1">Judul</label>
            <input name="judul" value={form.judul} onChange={ubah} className={input} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Kategori</label>
            <select name="kategori" value={form.kategori} onChange={ubah} className={input}>
              {pilihanKategori.map((k) => (
                <option key={k}>{k}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Tanggal</label>
            <input name="tanggal" value={form.tanggal} onChange={ubah} placeholder="12 Agustus 2026" className={input} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Gambar (nama file di folder public)</label>
            <input name="gambar" value={form.gambar} onChange={ubah} className={input} />
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-1">Ringkasan</label>
          <input name="ringkasan" value={form.ringkasan} onChange={ubah} className={input} />
        </div>
        <div>
          <label className="block font-semibold mb-1">Isi berita</label>
          <textarea name="isi" rows={4} value={form.isi} onChange={ubah} className={input} />
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div className="flex gap-3">
          <button className="bg-pine-900 text-white font-semibold px-6 py-2 rounded hover:bg-pine-700">
            {editId !== null ? "Simpan perubahan" : "Tambah berita"}
          </button>
          {editId !== null && (
            <button
              type="button"
              onClick={() => { setEditId(null); setForm(kosong); }}
              className="border border-ink-300 px-6 py-2 rounded font-semibold hover:bg-ink-100"
            >
              Batal
            </button>
          )}
        </div>
      </form>

      <div className="mt-10 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-pine-900">Daftar berita</h2>
        <button onClick={resetData} className="text-sm underline text-ink-600 hover:text-pine-800">
          Kembalikan data awal
        </button>
      </div>

      <div className="mt-4 bg-white border border-ink-200 rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-pine-50 text-pine-900">
            <tr>
              <th className="p-3">Judul</th>
              <th className="p-3">Kategori</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-200">
            {daftar.map((b) => (
              <tr key={b.id}>
                <td className="p-3 font-medium">{b.judul}</td>
                <td className="p-3">{b.kategori}</td>
                <td className="p-3 whitespace-nowrap">{b.tanggal}</td>
                <td className="p-3 whitespace-nowrap">
                  <button onClick={() => mulaiEdit(b)} className="text-pine-700 font-semibold hover:underline mr-4">
                    Edit
                  </button>
                  <button onClick={() => hapus(b.id)} className="text-red-600 font-semibold hover:underline">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {daftar.length === 0 && <p className="p-6 text-center text-ink-500">Belum ada berita.</p>}
      </div>
    </main>
  );
}