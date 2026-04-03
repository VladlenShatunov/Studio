import React from 'react';

const testimonials = [
  "Clear communication and a highly polished final presentation. The strategy and execution were perfectly aligned with our business goals from day one.",
  "Thoughtful execution, refined design, and strong attention to detail. The new digital architecture has completely shifted how our services are perceived.",
  "Everything felt structured, modern, and professionally handled. True high-end engineering that delivered measurable improvements."
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 md:py-48 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-6">Client Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 tracking-tighter leading-[1.05]">
            Trust built on <span className="italic font-light text-neutral-400">execution.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {testimonials.map((quote, index) => (
            <div key={index} className="bg-white p-12 lg:p-14 border-t-2 border-neutral-100/80 hover:border-neutral-900 transition-colors duration-500 relative flex flex-col justify-between">
               
               <p className="text-lg md:text-xl text-neutral-800 leading-relaxed font-light mb-12">
                 "{quote}"
               </p>
               
               <div className="flex items-center gap-4 mt-auto">
                  <span className="w-8 h-px bg-neutral-300"></span>
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400">Anonymous feedback</p>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
