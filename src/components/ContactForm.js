"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [error, setError] = useState("");
  const [terkirim, setTerkirim] = useState(false);

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const kirim = (e) => {
    e.preventDefault();
    if (!form.nama.trim() || !form.email.includes("@") || form.pesan.trim().length < 10) {
      setError("Isi nama, email yang valid, dan pesan minimal 10 karakter.");
      return;
    }
    setError("");
    setTerkirim(true);
  };

  if (terkirim) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <p className="font-bold text-emerald-800">Terima kasih, {form.nama}.</p>
        <p className="text-emerald-700 mt-1">Pesanmu sudah kami terima dan akan dibalas lewat {form.email}.</p>
        <button
          onClick={() => { setForm({ nama: "", email: "", pesan: "" }); setTerkirim(false); }}
          className="mt-4 underline font-semibold text-emerald-800"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  const input = "w-full border border-ink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brass-400";
  return (
    <form onSubmit={kirim} className="bg-white border border-ink-200 rounded-xl p-6 space-y-4">
      <div>
        <label className="block font-semibold mb-1">Nama</label>
        <input name="nama" value={form.nama} onChange={ubah} className={input} />
      </div>
      <div>
        <label className="block font-semibold mb-1">Email</label>
        <input name="email" value={form.email} onChange={ubah} className={input} />
      </div>
      <div>
        <label className="block font-semibold mb-1">Pesan</label>
        <textarea name="pesan" rows={4} value={form.pesan} onChange={ubah} className={input} />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button className="bg-ink-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-ink-700">
        Kirim pesan
      </button>
    </form>
  );
}