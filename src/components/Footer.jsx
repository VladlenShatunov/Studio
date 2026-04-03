import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-bold gap-8">
           <p>© 2026 — All rights reserved.</p>
           
           <nav className="flex items-center gap-8 md:gap-12">
             <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
             <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
             <a href="#work" className="hover:text-neutral-900 transition-colors">Work</a>
             <a href="#process" className="hover:text-neutral-900 transition-colors">Process</a>
           </nav>
        </div>
      </div>
    </footer>
  );
}
