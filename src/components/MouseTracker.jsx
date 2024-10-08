import { useEffect, useState } from "react";

export default function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none opacity-75 ${
        document.documentElement.classList.contains("dark")
          ? "bg-yellow-400"
          : "bg-blue-500"
      }`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
}
