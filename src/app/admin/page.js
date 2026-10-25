"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Kalau sudah login, langsung ke dashboard
  useEffect(() => {
    if (localStorage.getItem("adminLogin") === "true") {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  function handleLogin(e) {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminLogin", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Username atau password salah.");
    }
  }

  const input =
    "w-full border border-ink-300 rounded px-4 py-2 focus:outline-none focus:border-pine-600 focus:ring-2 focus:ring-pine-200";

  return (
    <main className="min-h-screen flex items-center justify-center bg-pine-900 px-5 py-12">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white rounded-lg p-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-pine-900 text-center">Login Admin</h1>
        <p className="mt-2 text-center text-ink-500">Website Profil SMA Negeri 3 Salatiga</p>

        <div className="mt-8">
          <label className="block font-semibold mb-1">Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} className={input} />
        </div>
        <div className="mt-4">
          <label className="block font-semibold mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={input}
          />
        </div>

        {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}

        <button className="mt-6 w-full bg-pine-900 text-white font-semibold py-3 rounded hover:bg-pine-700">
          Masuk
        </button>
      </form>
    </main>
  );
}