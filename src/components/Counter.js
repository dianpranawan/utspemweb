"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ target, suffix = "" }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const mulai = performance.now();
      const durasi = 1500;
      const jalan = (t) => {
        const p = Math.min((t - mulai) / durasi, 1);
        setN(Math.round(target * p));
        if (p < 1) requestAnimationFrame(jalan);
      };
      requestAnimationFrame(jalan);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{n.toLocaleString("id-ID")}{suffix}</span>;
}