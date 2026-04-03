import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-white relative overflow-hidden border-t border-neutral-100">
      
      {/* Decorative pure abstraction */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
         <div className="w-[800px] h-[800px] border border-black rounded-full"></div>
         <div className="w-[600px] h-[600px] border border-black rounded-full absolute"></div>
         <div className="w-[400px] h-[400px] border border-black rounded-full absolute"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-display font-medium text-neutral-900 mb-10 tracking-tighter leading-[1.05]">
          Let’s engineer a <br className="hidden md:block"/>
          <span className="italic font-light text-neutral-400">premium digital presence.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-neutral-500 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          Currently accepting select projects focused on quality, clarity, and strong visual execution.
        </p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto group inline-flex justify-center items-center gap-2 px-10 py-5 bg-neutral-900 text-white rounded-2xl font-medium tracking-wide hover:bg-neutral-800 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
            Start a Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#" className="w-full sm:w-auto group inline-flex justify-center items-center gap-2 px-10 py-5 bg-white text-neutral-900 rounded-2xl font-semibold tracking-wide border border-neutral-200/80 hover:border-neutral-300 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-0.5">
            Book a Call
            <Calendar size={18} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
