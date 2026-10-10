import "./globals.css";
import { Public_Sans, Newsreader } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const body = Public_Sans({ subsets: ["latin"], variable: "--font-body" });
const head = Newsreader({ subsets: ["latin"], variable: "--font-head" });

export const metadata = {
  title: "SMA Negeri 3 Salatiga",
  description: "Website resmi SMA Negeri 3 Salatiga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${body.variable} ${head.variable}`}>
      <body className="bg-ink-50 text-ink-800 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}