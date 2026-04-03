import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackToPortfolio() {
  // Ensure page loads at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Link 
      to="/"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-5 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-neutral-800 hover:-translate-y-1 transition-all duration-300 group font-sans backdrop-blur-xl"
    >
      <ArrowLeft size={16} className="text-neutral-400 group-hover:text-white transition-colors group-hover:-translate-x-1" />
      <span className="text-[11px] font-bold tracking-widest uppercase">Portfolio</span>
    </Link>
  );
}
