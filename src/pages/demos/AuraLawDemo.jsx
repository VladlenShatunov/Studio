import React, { useEffect } from 'react';
import BackToPortfolio from '../../components/BackToPortfolio';

export default function AuraLawDemo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-serif bg-white text-neutral-900 min-h-screen selection:bg-neutral-900 selection:text-white">
      <BackToPortfolio />

      {/* Elegant Nav */}
      <header className="border-b border-neutral-200/60 py-6 px-8 md:px-12 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-md z-50">
         <div className="text-2xl lg:text-3xl tracking-tighter font-bold uppercase text-neutral-900">Aura<span className="font-light">Law</span></div>
         <nav className="hidden lg:flex gap-10 text-[10px] tracking-[0.25em] uppercase font-semibold text-neutral-500">
           <a href="#" className="hover:text-black transition-colors">Practice Areas</a>
           <a href="#" className="hover:text-black transition-colors">Our Attorneys</a>
           <a href="#" className="hover:text-black transition-colors">Insights</a>
           <a href="#" className="hover:text-black transition-colors">Firm Overview</a>
         </nav>
         <button className="hidden sm:block px-8 py-3 bg-neutral-900 text-white text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-neutral-800 transition shadow-sm">
           Request Consultation
         </button>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-40 px-8 flex flex-col items-center text-center max-w-5xl mx-auto border-b border-neutral-100">
         <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-10 text-neutral-900">
            Strategic Legal Counsel for Industry Leaders.
         </h1>
         <p className="text-lg md:text-xl text-neutral-500 font-sans font-light max-w-2xl mb-14 leading-relaxed">
            A boutique litigation and corporate advisory firm dedicated to securing definitive outcomes in the most complex, high-stakes environments.
         </p>
         <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 py-5 bg-neutral-900 text-white uppercase text-[11px] tracking-[0.2em] font-semibold hover:bg-neutral-800 transition shadow-lg">
               Schedule a Review
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white border border-neutral-300 text-neutral-900 uppercase text-[11px] tracking-[0.2em] font-semibold hover:border-neutral-900 transition">
               Explore Practice Areas
            </button>
         </div>
      </section>

      {/* Credibility / Trust Banner */}
      <section className="py-12 border-b border-neutral-100 bg-neutral-50">
         <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">Trusted By Entities Across</p>
            <div className="flex flex-wrap justify-center gap-12 text-sm font-sans font-semibold text-neutral-500 tracking-widest uppercase">
               <span>Real Estate</span>
               <span>Private Equity</span>
               <span>Software</span>
               <span>Healthcare</span>
            </div>
         </div>
      </section>

      {/* Why Clients Seek Strategic Counsel */}
      <section className="py-32 px-8 bg-black text-white">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
               <div className="lg:pr-12">
                  <h2 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 mb-6">Firm Ethos</h2>
                  <h3 className="text-4xl md:text-5xl tracking-tighter font-medium leading-[1.1] mb-8">
                     Why global entities rely on our strategic defense.
                  </h3>
                  <p className="font-sans font-light text-neutral-400 leading-relaxed text-lg mb-10">
                     Our approach dismantles legal ambiguity. We do not just react to disputes; we structurally architect your legal standing to prevent vulnerabilities before they manifest inside the boardroom.
                  </p>
                  <a href="#" className="font-sans text-[11px] tracking-[0.2em] uppercase font-bold text-white border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-colors">
                     Read our Philosophy
                  </a>
               </div>
               
               {/* Elegant Stats Grid */}
               <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                  <div className="border-t border-neutral-800 pt-6">
                     <div className="text-4xl font-light mb-2">$4.2B+</div>
                     <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Capital Protected</p>
                  </div>
                  <div className="border-t border-neutral-800 pt-6">
                     <div className="text-4xl font-light mb-2">150+</div>
                     <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Successful Litigations</p>
                  </div>
                  <div className="border-t border-neutral-800 pt-6">
                     <div className="text-4xl font-light mb-2">98%</div>
                     <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Settlement Ratio</p>
                  </div>
                  <div className="border-t border-neutral-800 pt-6">
                     <div className="text-4xl font-light mb-2">24/7</div>
                     <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Immediate Counsel</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Services / Practice Areas */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
               <h2 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 mb-6">Practice Areas</h2>
               <h3 className="text-4xl md:text-5xl tracking-tighter font-medium leading-tight">Focused Expertise. <br/>Absolute Precision.</h3>
            </div>
            <button className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-900 border border-neutral-900 px-6 py-3 hover:bg-neutral-900 hover:text-white transition">
               View All Practices
            </button>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Corporate Litigation", desc: "Navigating complex board disputes and multi-national vendor conflicts with strict discretion." },
              { title: "Intellectual Property", desc: "Defending aggressive patent and trademark challenges for emerging tech entities." },
              { title: "Real Estate Structuring", desc: "Ensuring regulatory compliance and favorable tax architecture in high-tier real estate." },
              { title: "Wealth Advisory", desc: "Private wealth defense and multi-generational estate structuring for high-net-worth clients." }
            ].map((svc, i) => (
              <div key={i} className="group border border-neutral-200 p-10 hover:border-neutral-900 transition-colors duration-500 cursor-pointer flex flex-col h-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                 <h4 className="text-2xl font-medium tracking-tight mb-6 group-hover:text-neutral-600 transition-colors">{svc.title}</h4>
                 <p className="font-sans text-neutral-500 font-light leading-relaxed flex-grow">{svc.desc}</p>
                 <div className="w-8 h-px bg-neutral-300 mt-10 group-hover:w-12 group-hover:bg-neutral-900 transition-all duration-500"></div>
              </div>
            ))}
         </div>
      </section>

      {/* Firm Approach / Positioning */}
      <section className="py-32 bg-neutral-50 px-8">
         <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            {/* Pseudo-Image Mockup */}
            <div className="w-full lg:w-1/2 aspect-square relative">
               <div className="absolute inset-0 bg-neutral-200 rounded-sm overflow-hidden border border-neutral-300 shadow-xl flex items-center justify-center p-12">
                  <div className="w-full h-full border border-neutral-400/30 flex flex-col justify-between p-8">
                     <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full border border-neutral-400"></div>
                        <div className="w-16 h-8 border border-neutral-400"></div>
                     </div>
                     <div className="text-5xl font-light text-neutral-400 italic">"Precision."</div>
                  </div>
               </div>
               {/* Overlapping Block */}
               <div className="absolute -bottom-8 -right-8 w-2/3 aspect-[4/3] bg-white border border-neutral-200 shadow-2xl p-8 flex flex-col justify-between">
                  <div className="w-12 h-1 bg-neutral-900 mb-6"></div>
                  <div className="font-sans font-medium text-sm text-neutral-800 leading-loose uppercase tracking-widest">Confidential Reporting Structure</div>
               </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-16">
               <h3 className="text-3xl md:text-4xl tracking-tighter font-medium leading-[1.1] mb-6">
                  Information superiority dictates the victor.
               </h3>
               <p className="font-sans font-light text-neutral-500 leading-relaxed text-lg mb-8">
                  Our intelligence-first approach ensures that when we sit across the table, we control the leverage. We utilize proprietary data framing and forensic analysis to deconstruct opposing arguments long before filing a brief.
               </p>
               <ul className="font-sans flex flex-col gap-4 text-sm font-medium text-neutral-700">
                  <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span> Predictive litigation modeling</li>
                  <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span> Deep forensic audits</li>
                  <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span> Leverage-oriented negotiations</li>
               </ul>
            </div>
         </div>
      </section>

      {/* CTA & Disclaimer Footer */}
      <footer className="bg-neutral-900 text-white pt-32 pb-16 px-8 text-center font-sans border-t-[16px] border-neutral-800">
         <h2 className="text-5xl md:text-6xl font-serif tracking-tighter mb-8 max-w-2xl mx-auto">
            Ready to discuss your legal architecture?
         </h2>
         <p className="text-neutral-400 font-light text-lg mb-12 max-w-xl mx-auto">
            Secure priority positioning by reaching out to our senior partners directly for an initial strategic assessment.
         </p>
         <button className="px-10 py-5 bg-white text-neutral-900 uppercase text-xs tracking-[0.2em] font-bold hover:bg-neutral-200 transition shadow-2xl mb-32">
            Contact The Firm
         </button>
         
         <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center text-neutral-500 text-[10px] tracking-widest uppercase">
            <p className="text-white/60 mb-2">Concept demo created for presentation purposes only.</p>
            <p className="text-white/30">This is not an official company website.</p>
         </div>
      </footer>
    </div>
  );
}
