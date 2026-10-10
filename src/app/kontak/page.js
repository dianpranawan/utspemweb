import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Kontak | SMA Negeri 03 Salatiga" };

const info = [
  ["Alamat", "Jl. Kartini No.34, Salatiga, Kec. Sidorejo, Kota Salatiga, Jawa Tengah 50711"],
  ["Telepon", "0298323300"],
  ["Email", "sman_3_salatiga@yahoo.com"],
  ["Jam layanan", "Senin sampai Jumat, 07.00 - 15.30 WIB"],
];

export default function KontakPage() {
  return (
    <main className="max-w-6xl mx-auto px-5 py-12">
      <h1 className="text-4xl font-bold mb-8">Kontak</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <dl className="bg-white border border-ink-200 rounded-xl divide-y divide-ink-200 self-start">
          {info.map(([k, v]) => (
            <div key={k} className="p-4">
              <dt className="font-semibold">{k}</dt>
              <dd className="text-ink-600">{v}</dd>
            </div>
          ))}
        </dl>
        <ContactForm />
      </div>
    </main>
  );
}