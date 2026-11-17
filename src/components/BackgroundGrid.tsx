"use client";

import React, { useEffect, useState } from "react";

export function BackgroundGrid() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Interactive Mouse Light */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full filter blur-[100px] opacity-[0.14] transition-transform duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, #8a5082 0%, #ff7b89 40%, transparent 70%)",
          transform: `translate(${mousePos.x - 225}px, ${mousePos.y - 225}px)`,
        }}
      />

      {/* Airy Ambient Pastel Blooms */}
      <div className="absolute top-[5%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#8a5082] filter blur-[150px] opacity-[0.09] dark:opacity-[0.18]" />
      <div className="absolute top-[40%] -right-[10%] w-[650px] h-[650px] rounded-full bg-[#ff7b89] filter blur-[160px] opacity-[0.08] dark:opacity-[0.16]" />
      <div className="absolute bottom-[5%] left-[25%] w-[550px] h-[550px] rounded-full bg-[#5c769d] filter blur-[140px] opacity-[0.08] dark:opacity-[0.15]" />

      {/* Subtle Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(rgba(138, 80, 130, 0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
