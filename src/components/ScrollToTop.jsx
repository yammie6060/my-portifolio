
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl 
                 bg-teal-500/20 border border-teal-500/40 text-teal-300
                 backdrop-blur-sm flex items-center justify-center text-lg
                 transition-all duration-200 hover:bg-teal-500/35 hover:-translate-y-1
                 hover:border-teal-400/60"
    >
      ↑
    </button>
  );
}