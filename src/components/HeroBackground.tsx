"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={ref} className="absolute inset-0" style={{ opacity: 0 }}>
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#1a1040]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow behind the plane area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orange-500/[0.07] blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/[0.05] blur-[100px]" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
