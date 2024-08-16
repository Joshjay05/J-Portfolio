// src/components/ScrollProgress.jsx
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScroll((window.pageYOffset / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 dark:bg-gray-700 z-50">
      <div
        className="h-full bg-blue-600 dark:bg-yellow-500"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
