import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'Initial analysis focuses on brand positioning, audience targeting, and defining key conversion metrics before any design occurs.'
  },
  {
    number: '02',
    title: 'Design & UX',
    description: 'Premium interfaces are constructed with strict adherence to modern typography, refined spacing, and advanced user psychology.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'The design is meticulously translated into fast, highly responsive, and robust code architectures built for scale.'
  },
  {
    number: '04',
    title: 'Launch & Handoff',
    description: 'Thorough multi-device QA testing, technical SEO structuring, and seamless deployment to world-class infrastructure.'
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 md:py-48 bg-[#FAFAFA] relative border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-6">Methodology</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-8 tracking-tighter leading-[1.05]">
            A frictionless journey from idea to execution.
          </h3>
          <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
            A clear and structured process ensures consistency, high-end quality, and a flawless final result. Every phase is fully transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group p-10 bg-white rounded-[2rem] border border-neutral-100/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-neutral-200 transition-all duration-700">
                <span className="block text-6xl md:text-7xl font-display font-light text-neutral-100 mb-10 group-hover:text-neutral-900 transition-colors duration-700 tracking-tighter leading-none">
                  {step.number}
                </span>
                <h4 className="text-2xl font-display font-medium text-neutral-900 mb-4 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-neutral-500 font-light leading-relaxed">
                  {step.description}
                </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
