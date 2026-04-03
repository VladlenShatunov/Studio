import React, { useEffect } from 'react';
import BackToPortfolio from '../../components/BackToPortfolio';
import { ArrowRight, BarChart, Network, Layers } from 'lucide-react';

export default function KansoCoDemo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans antialiased bg-[#fdfdfd] text-neutral-900 min-h-screen selection:bg-neutral-200">
      <BackToPortfolio />

      {/* Super Minimal Nav */}
      <nav className="px-8 py-6 flex justify-between items-center max-w-[90rem] mx-auto sticky top-0 bg-[#fdfdfd]/90 backdrop-blur-md z-50">
         <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-neutral-900 flex items-center justify-center rounded-sm">
               <div className="w-2 h-2 bg-white"></div>
            </div>
            <span className="font-semibold tracking-wide text-sm hidden sm:block">Kanso & Co.</span>
         </div>
         <div className="hidden md:flex gap-10 font-bold text-[10px] uppercase tracking-widest text-neutral-400">
            <a href="#" className="hover:text-neutral-900 transition-colors">Approach</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Verticals</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Outcomes</a>
         </div>
         <a href="#" className="font-bold text-[10px] uppercase tracking-widest text-neutral-900 flex items-center gap-2 border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
            Initiate Audit <ArrowRight size={12}/>
         </a>
      </nav>

      {/* Geographic / Grid Hero */}
      <section className="pt-24 pb-32 px-8 max-w-[90rem] mx-auto border-b border-neutral-100">
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="max-w-2xl">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-sm mb-8 text-[9px] uppercase tracking-widest font-bold text-neutral-500">
                 Operational Strategy
               </div>
               <h1 className="text-5xl md:text-7xl font-display tracking-tight font-semibold leading-[1.05] mb-8 text-neutral-900">
                  Engineering <br/> business <span className="text-neutral-400 font-light italic">clarity.</span>
               </h1>
               <p className="text-lg md:text-xl text-neutral-500 max-w-lg leading-relaxed font-light mb-10">
                  We dismantle complex operational problems and restructure them into highly profitable, mathematically sound, and scalable frameworks.
               </p>
               <button className="px-8 py-5 bg-neutral-900 text-white rounded-sm font-semibold tracking-wide text-sm hover:bg-neutral-800 transition shadow-xl hover:-translate-y-0.5">
                  Explore Capabilities
               </button>
            </div>
            
            {/* Strategy Dashboard Mockup */}
            <div className="h-[450px] md:h-[600px] bg-white rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-neutral-200 flex flex-col p-6 relative overflow-hidden group perspective-1000">
               <div className="absolute inset-0 bg-[#fbfbfb] z-0"></div>
               {/* Nav Mock */}
               <div className="relative z-10 w-full flex justify-between items-center mb-10 pb-4 border-b border-neutral-100">
                  <div className="flex gap-2"><div className="w-3 h-3 bg-neutral-300 rounded-full"></div><div className="w-16 h-3 bg-neutral-200 rounded-full"></div></div>
                  <div className="w-8 h-8 rounded-full border border-neutral-200 flex justify-center items-center"><div className="w-1/2 h-1/2 bg-neutral-100 rounded-full"></div></div>
               </div>
               
               {/* Dashboard Content Mock */}
               <div className="relative z-10 flex-1 flex flex-col gap-6">
                  <div className="w-1/3 h-6 bg-neutral-900 rounded-sm"></div>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white border border-neutral-100 p-4 rounded-lg shadow-sm">
                        <div className="w-full flex justify-between items-end mb-4">
                           <div className="w-8 h-8 bg-neutral-100 rounded-md"></div>
                           <div className="text-[10px] text-green-500 font-bold">+24%</div>
                        </div>
                        <div className="h-2 w-1/2 bg-neutral-200 mb-2"></div>
                        <div className="h-6 w-3/4 bg-neutral-900"></div>
                     </div>
                     <div className="bg-white border border-neutral-100 p-4 rounded-lg shadow-sm">
                        <div className="w-full flex justify-between items-end mb-4">
                           <div className="w-8 h-8 bg-neutral-100 rounded-md"></div>
                           <div className="text-[10px] text-green-500 font-bold">+18%</div>
                        </div>
                        <div className="h-2 w-1/2 bg-neutral-200 mb-2"></div>
                        <div className="h-6 w-3/4 bg-neutral-900"></div>
                     </div>
                  </div>
                  
                  {/* Graph Concept */}
                  <div className="flex-1 bg-white border border-neutral-100 rounded-lg shadow-sm p-4 flex flex-col justify-end gap-1 relative overflow-hidden">
                     <div className="absolute top-4 left-4 h-2 w-1/3 bg-neutral-200"></div>
                     <div className="w-full flex items-end justify-between px-2 gap-2 h-2/3">
                        {[20, 35, 25, 50, 45, 80, 75, 100].map((h, i) => (
                           <div key={i} className="w-full bg-neutral-900 rounded-t-sm" style={{height: `${h}%`}}></div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Value Props / Core Principles */}
      <section className="py-24 bg-white px-8">
         <div className="max-w-[90rem] mx-auto">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-16 text-center">Core Competencies</h2>
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
               <div className="p-8 border border-neutral-100 hover:border-neutral-900/20 transition-colors shadow-sm bg-[#fafafa]">
                  <BarChart className="text-neutral-900 mb-6" size={28} />
                  <h3 className="text-xl font-semibold tracking-tight mb-4">Margin Optimization</h3>
                  <p className="text-neutral-500 font-light leading-relaxed text-sm">Identifying precise operational leaks and restructuring workflows to immediately increase net profitability without cutting core resources.</p>
               </div>
               <div className="p-8 border border-neutral-100 hover:border-neutral-900/20 transition-colors shadow-sm bg-[#fafafa]">
                  <Network className="text-neutral-900 mb-6" size={28} />
                  <h3 className="text-xl font-semibold tracking-tight mb-4">Systems Architecture</h3>
                  <p className="text-neutral-500 font-light leading-relaxed text-sm">Deploying highly efficient, customized technology stacks to automate critical bottlenecks and remove human error from scaling operations.</p>
               </div>
               <div className="p-8 border border-neutral-100 hover:border-neutral-900/20 transition-colors shadow-sm bg-[#fafafa]">
                  <Layers className="text-neutral-900 mb-6" size={28} />
                  <h3 className="text-xl font-semibold tracking-tight mb-4">Cultural Alignment</h3>
                  <p className="text-neutral-500 font-light leading-relaxed text-sm">Ensuring that strategic frameworks are actually adopted by your leadership teams, turning theoretical strategy into measurable daily habits.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Engagement Model (Process) */}
      <section className="py-32 bg-neutral-900 text-white px-8 overflow-hidden">
         <div className="max-w-[90rem] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
               <div className="max-w-2xl">
                  <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500 mb-6">Engagement Model</h2>
                  <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">Execution is everything.</h3>
                  <p className="text-neutral-400 font-light text-lg">A brilliant strategy is worthless without a flawless operational handoff. This is our exact methodology.</p>
               </div>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-8">
               {[
                 {num: "01", title: "Diagnostic Audit", desc: "A 14-day intensive assessment of your current org charts, revenue models, and systemic bottlenecks."},
                 {num: "02", title: "Blueprint Phase", desc: "Drafting the exact new operational frameworks tailored mathematically to your unit economics."},
                 {num: "03", title: "Deployment", desc: "Executing structural changes alongside your leadership team to enforce accountability."},
                 {num: "04", title: "Sustain & Review", desc: "Ongoing 90-day analytics tracking to ensure the new infrastructure sticks and performs."}
               ].map((step, i) => (
                 <div key={i} className="group border-t border-neutral-800 pt-8 relative">
                    <div className="w-0 h-[2px] bg-white absolute top-[-1px] left-0 group-hover:w-full transition-all duration-700"></div>
                    <span className="text-5xl font-light text-neutral-800 mb-8 block group-hover:text-white transition-colors duration-500 tracking-tighter">{step.num}</span>
                    <h4 className="text-xl font-semibold tracking-tight mb-4">{step.title}</h4>
                    <p className="text-neutral-400 font-light leading-relaxed text-sm">{step.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Operational Value Stats */}
      <section className="py-24 px-8 bg-white border-b border-neutral-100">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <h3 className="text-3xl font-light tracking-tight max-w-sm text-neutral-800">
               Measured strictly by <span className="font-medium">outcomes.</span>
            </h3>
            <div className="flex gap-16 md:gap-24">
               <div>
                  <div className="text-5xl font-light mb-2">2.4<span className="text-2xl text-neutral-400">x</span></div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">Average ROI</p>
               </div>
               <div>
                  <div className="text-5xl font-light mb-2">90<span className="text-2xl text-neutral-400">d</span></div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">To Deployment</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-[#fafafa] text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-8 text-neutral-900">Ready to scale securely?</h2>
            <p className="text-neutral-500 text-xl font-light mb-12">Stop losing margin to operational drag. Schedule your initial structural audit.</p>
            <button className="px-10 py-5 bg-neutral-900 text-white rounded-sm font-semibold tracking-wide shadow-xl hover:-translate-y-1 transition duration-300">
               Book Initial Audit
            </button>
         </div>
      </section>

      {/* Footer / Disclaimer */}
      <footer className="border-t border-neutral-200 py-16 text-center text-[10px] uppercase tracking-widest text-neutral-400 font-semibold bg-white flex flex-col items-center justify-center">
         <p className="mb-4 font-bold text-neutral-900">A Kanso & Co. Concept</p>
         <p className="max-w-md mx-auto leading-relaxed text-neutral-400/80">Concept demo created for presentation purposes only. This is not an official company website.</p>
      </footer>
    </div>
  );
}
