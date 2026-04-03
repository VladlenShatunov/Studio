import React from 'react';

const types = [
  "Corporate & Business Websites",
  "High-Converting Landing Pages",
  "Service Industry Platforms",
  "Premium E-commerce Interfaces",
  "Personal Brand Websites",
  "Lead Generation Funnels"
];

export default function CapabilitiesSection() {
  return (
    <section className="py-32 md:py-40 bg-black overflow-hidden relative border-t border-neutral-900">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-[100px] sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-neutral-800 to-neutral-900 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-20">
        
        <div className="md:w-5/12 text-center md:text-left">
           <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-600 mb-6">Expertise</h2>
           <h3 className="text-4xl md:text-6xl font-display font-medium text-white mb-8 tracking-tighter leading-[1.05]">
             Versatile engineering for any business model.
           </h3>
           <p className="text-neutral-400 text-lg md:text-xl font-light mb-10 leading-relaxed">
             From a refined central hub to a robust automated marketing machine, every project is structurally obsessed over for scale, speed, and absolute elegance.
           </p>
           <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 rounded-2xl font-medium tracking-wide hover:bg-neutral-200 transition-all duration-500 shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.1)] hover:-translate-y-1 relative z-10">
              Discuss Project Requirements
           </a>
        </div>

        <div className="md:w-6/12 w-full pl-0 md:pl-10">
           <ul className="flex flex-col gap-0">
             {types.map((type, index) => (
               <li key={index} className="flex items-center gap-6 py-6 border-b border-neutral-800/60 group cursor-default relative z-10">
                 <div className="text-[10px] font-bold tracking-widest text-neutral-600 group-hover:text-white transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                 </div>
                 <span className="text-neutral-300 font-display text-xl md:text-2xl font-light group-hover:text-white transition-colors duration-500">{type}</span>
               </li>
             ))}
           </ul>
        </div>
        
      </div>
    </section>
  );
}
