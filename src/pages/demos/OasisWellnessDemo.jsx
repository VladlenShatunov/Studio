import React, { useEffect } from 'react';
import BackToPortfolio from '../../components/BackToPortfolio';
import { ArrowUpRight, Clock, MapPin, PlayCircle } from 'lucide-react';

export default function OasisWellnessDemo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans antialiased bg-zinc-950 text-white min-h-screen relative overflow-hidden selection:bg-emerald-500 selection:text-zinc-950">
      <BackToPortfolio />

      {/* Abstract Ambient Lights */}
      <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Nav */}
      <nav className="p-6 md:py-8 md:px-12 flex justify-between items-center relative z-50 bg-zinc-950/50 backdrop-blur-md border-b border-white/5 sticky top-0">
         <div className="font-display font-bold tracking-[0.2em] text-xl text-emerald-400">OASIS</div>
         <div className="hidden md:flex gap-10 font-bold text-[10px] tracking-widest uppercase text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Studios</a>
            <a href="#" className="hover:text-white transition-colors">Frameworks</a>
            <a href="#" className="hover:text-white transition-colors">Philosophy</a>
         </div>
         <button className="px-6 py-3 bg-white text-zinc-900 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Book a Class
         </button>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-32 px-6 md:px-12 max-w-[90rem] mx-auto relative z-10">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-20">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 mb-8 backdrop-blur-md">
                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                 <span className="text-[9px] tracking-widest uppercase font-bold text-emerald-300">New Recovery Studio Open</span>
               </div>
               
               <h1 className="text-6xl md:text-[6rem] lg:text-[7rem] font-display font-bold leading-[0.9] tracking-tighter mb-8 text-zinc-100">
                  Find your <span className="text-emerald-400 italic font-medium">tempo.</span>
               </h1>
               
               <p className="text-xl text-zinc-400 font-light max-w-lg leading-relaxed mb-12">
                  Immersive sensory fitness designed to push your athletic thresholds in a hyper-curated, zero-distraction environment.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-5 bg-emerald-500 text-zinc-950 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-emerald-400 transition shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                     View Schedule
                  </button>
                  <button className="px-8 py-5 bg-zinc-900/50 border border-zinc-800 text-white rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-zinc-800 transition flex items-center justify-center gap-2 group backdrop-blur-md">
                     Meet Trainers <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-emerald-400" />
                  </button>
               </div>
            </div>
            
            {/* Visual Glass Layout Mockup */}
            <div className="relative h-[650px] rounded-[3rem] border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-2xl p-6 md:p-10 flex flex-col justify-between overflow-hidden group shadow-2xl">
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-500/10 to-transparent"></div>
               
               {/* Mockup Header */}
               <div className="flex justify-between items-center relative z-10 w-full bg-zinc-950/60 p-4 rounded-2xl border border-white/5 mb-8">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full border border-emerald-500/30 flex justify-center items-center">
                        <PlayCircle size={18} className="text-emerald-400"/>
                     </div>
                     <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">Live Coaching</div>
                        <div className="text-[10px] text-zinc-400">Session in progress</div>
                     </div>
                  </div>
                  <div className="w-12 h-2 bg-zinc-800 rounded-full overflow-hidden">
                     <div className="w-2/3 h-full bg-emerald-500 animate-pulse"></div>
                  </div>
               </div>

               {/* Mockup Cards */}
               <div className="relative z-10 flex flex-col gap-4 mt-auto">
                  <div className="w-full flex items-center justify-between p-5 rounded-2xl bg-zinc-800/90 border border-zinc-700/50 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-transform cursor-pointer">
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                           <Clock size={12} className="text-emerald-400" />
                           <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">08:00 AM</div>
                        </div>
                        <div className="text-xl font-display font-bold">HIIT Assault</div>
                     </div>
                     <div className="px-4 py-2 bg-emerald-500 text-zinc-950 rounded-full text-[9px] font-bold uppercase tracking-widest">Booked Out</div>
                  </div>
                  <div className="w-full flex items-center justify-between p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 backdrop-blur-md hover:bg-zinc-800 transition-colors cursor-pointer">
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                           <Clock size={12} className="text-zinc-500" />
                           <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">09:30 AM</div>
                        </div>
                        <div className="text-xl font-display font-bold text-zinc-300">Recovery Flow</div>
                     </div>
                     <div className="px-4 py-2 border border-zinc-700 text-zinc-300 rounded-full text-[9px] font-bold uppercase tracking-widest hover:border-white transition-colors">Book Now</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Featured Frameworks */}
      <section className="py-32 border-y border-white/5 bg-zinc-950/80 relative z-10 px-6">
         <div className="max-w-[90rem] mx-auto">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500 mb-16 text-center">Training Frameworks</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 {title: "Assault / HIIT", desc: "High-yield metabolic conditioning designed to completely exhaust your anaerobic threshold in 45 minutes."},
                 {title: "Velocity", desc: "Sprint mechanics and explosive power mechanics utilizing heavy sleds, assault bikes, and plyometrics."},
                 {title: "Zenith Flow", desc: "Our signature active recovery. Heat-regulated studios with deep mobility workflows and sound bath meditation."}
               ].map((fw, i) => (
                 <div key={i} className="group p-10 bg-zinc-900/50 rounded-3xl border border-zinc-800/50 hover:bg-zinc-800/80 hover:border-zinc-700 transition-all duration-500 cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center mb-8 group-hover:border-emerald-500 transition-colors">
                       <span className="text-emerald-400 font-display font-bold">0{i+1}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold tracking-tight mb-4">{fw.title}</h3>
                    <p className="text-zinc-400 font-light leading-relaxed">{fw.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Why We Stand Out (Studio Experience) */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
         <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Visual Grid Mockup */}
            <div className="grid grid-cols-2 gap-4">
               <div className="flex flex-col gap-4">
                  <div className="h-64 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-end relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold text-zinc-400">Acoustic Engineering</span>
                  </div>
                  <div className="h-40 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-end relative overflow-hidden group">
                     <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold text-zinc-400">Thermal Control</span>
                  </div>
               </div>
               <div className="flex flex-col gap-4 pt-12">
                  <div className="h-40 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-end relative overflow-hidden group">
                     <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold text-zinc-400">Tactile Flooring</span>
                  </div>
                  <div className="h-64 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-end relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold text-emerald-400">Immersive Lighting</span>
                  </div>
               </div>
            </div>
            
            <div>
               <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500 mb-6">The Environment</h2>
               <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-8 leading-[1.1]">
                  A sensory fortress.
               </h3>
               <p className="text-lg font-light text-zinc-400 leading-relaxed mb-8">
                  We don't use harsh gym lighting or generic playlists. Our studios are meticulously engineered acoustic chambers designed to lock your focus and synchronize your output with the environment.
               </p>
               <ul className="flex flex-col gap-4 text-sm font-bold text-zinc-300">
                  <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Club-grade spatial audio systems</li>
                  <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Heart-rate synced lighting rigs</li>
                  <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Hospital-grade air filtration</li>
               </ul>
            </div>
         </div>
      </section>

      {/* Philosophy / Conversion CTA */}
      <section className="py-40 px-6 bg-emerald-950 text-center relative z-10 overflow-hidden border-t border-emerald-900">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900 via-emerald-950 to-zinc-950 opacity-60"></div>
         <div className="max-w-4xl mx-auto relative z-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-[1.05] text-white">
               Leave your excuses <br/><span className="text-emerald-400">at the door.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-emerald-100/70 leading-relaxed mb-12">
               Your first assault session is entirely on us. Experience the standard of modern performance tracking.
            </p>
            <button className="px-10 py-5 bg-white text-zinc-950 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-emerald-400 transition shadow-2xl">
               Claim Your Free Session
            </button>
         </div>
      </section>

      {/* Footer / Disclaimer */}
      <footer className="border-t border-white/5 py-16 px-6 text-center text-[10px] uppercase tracking-widest text-zinc-600 font-bold bg-zinc-950 relative z-10 flex flex-col items-center justify-center">
         <div className="font-display text-3xl text-zinc-800 tracking-[0.2em] mb-8">OASIS</div>
         <p className="mb-3 text-zinc-500">Oasis Wellness Concept Demo</p>
         <p className="max-w-md mx-auto leading-relaxed text-zinc-700">Concept demo created for presentation purposes only. This is not an official company website.</p>
      </footer>
    </div>
  );
}
