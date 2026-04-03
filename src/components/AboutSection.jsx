import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const strengths = [
    "Polished, strategic, aesthetic-first design",
    "Flawless responsive engineering across devices",
    "Transparent, jargon-free professional workflow",
    "Interfaces engineered to build instant trust"
  ];

  return (
    <section id="about" className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Left: Editorial Portrait Area */}
          <div className="relative order-2 lg:order-1 group perspective-1000">
            {/* Background offset block */}
            <div className="absolute inset-x-8 -inset-y-8 bg-neutral-50 rounded-[2rem] transform rotate-3 -z-10 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105"></div>
            
            <div className="aspect-[3/4] bg-neutral-900 rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:-translate-y-2 flex flex-col justify-end p-10">
              <div className="absolute inset-0 bg-neutral-800 opacity-50 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-30 z-10"></div>
              
              <div className="absolute inset-0 flex flex-col">
                 <div className="flex-1 bg-neutral-200"></div>
                 <div className="flex-1 bg-neutral-300"></div>
                 <div className="flex-1 bg-neutral-400"></div>
              </div>
              
              <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20"></div>

              <div className="relative z-30">
                 <h4 className="text-white font-display text-4xl font-light tracking-tight leading-[1.1] mb-6">
                    "Design is the silent ambassador of a brand."
                 </h4>
                 <div className="flex items-center gap-4">
                   <span className="w-10 h-px bg-white/40 block"></span>
                   <span className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-semibold">Digital Philosophy</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Right: Copy & Strengths */}
          <div className="order-1 lg:order-2">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-6">Studio Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-8 leading-[1.05] tracking-tighter">
              Digital presence <span className="italic text-neutral-400 font-light">defines perception.</span>
            </h3>
            
            <div className="prose prose-lg text-neutral-500 mb-12 font-light leading-relaxed">
              <p>
                Every detail — layout, spacing, typography — contributes to how a brand is judged within seconds. A website is no longer just a digital business card; it is the deciding factor in whether a potential client engages or moves on to a competitor. 
              </p>
              <p className="mt-6">
                Constructing responsive, seamless interfaces elevates market perception. If a business needs to look established, modern, and built for scale, its digital presence must lead the way without compromise.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {strengths.map((strength, index) => (
                <div key={index} className="flex gap-4 items-center group/item cursor-default">
                  <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center group-hover/item:bg-neutral-900 transition-colors duration-300 shrink-0">
                    <CheckCircle2 size={16} className="text-neutral-400 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-neutral-700 tracking-wide">{strength}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
