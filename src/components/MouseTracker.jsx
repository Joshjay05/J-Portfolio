import { useEffect, useState } from "react";

export default function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const maxTrailLength = 15; // Number of trailing particles

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);

      setTrail((prevTrail) => {
        // Add new position to the start of the array
        const newTrail = [newPosition, ...prevTrail];
        // Keep only the maximum number of positions
        return newTrail.slice(0, maxTrailLength);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isDarkMode = document.documentElement.classList.contains("dark");
  const mainColor = isDarkMode
    ? "rgba(250, 204, 21, 0.75)"
    : "rgba(59, 130, 246, 0.75)";

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {/* Main cursor particle */}
      <div
        className="absolute rounded-full w-6 h-6 blur-sm"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
          backgroundColor: mainColor,
          boxShadow: `0 0 10px ${mainColor}`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Trail particles */}
      {trail.map((pos, index) => {
        // Calculate size and opacity based on position in trail
        const size = Math.max(24 - index * 1.5, 5);
        const opacity = Math.max(0.8 - index * 0.055, 0);

        return (
          <div
            key={index}
            className="absolute rounded-full blur-md"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `translate(${pos.x - size / 2}px, ${
                pos.y - size / 2
              }px)`,
              backgroundColor: isDarkMode
                ? `rgba(250, 204, 21, ${opacity})`
                : `rgba(59, 130, 246, ${opacity})`,
              transition: "all 0.15s ease-out",
              animation: "pulse 1.5s infinite alternate",
            }}
          />
        );
      })}

      <style>{`
        @keyframes pulse {
          0% {
            filter: blur(3px);
          }
          100% {
            filter: blur(5px);
          }
        }
      `}</style>
    </div>
  );
}
