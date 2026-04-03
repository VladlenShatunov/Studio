import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Aura Law Firm',
    category: 'Corporate / Legal',
    description: 'A deeply professional, sophisticated framework designed to establish immediate trust and credibility for a boutique legal practice.',
    mockupType: 'law',
    color: 'bg-white',
    link: '/demo/aura-law'
  },
  {
    title: 'Kanso & Co.',
    category: 'Consulting',
    description: 'A minimalist digital environment built to position independent financial consultants as exact, premium service providers.',
    mockupType: 'consulting',
    color: 'bg-neutral-50',
    link: '/demo/kanso-co'
  },
  {
    title: 'Oasis Wellness',
    category: 'Health & Fitness Brand',
    description: 'A vibrant yet highly organized interface for a modern fitness studio focusing on streamlined class-booking workflows.',
    mockupType: 'fitness',
    color: 'bg-zinc-900',
    link: '/demo/oasis-wellness'
  }
];

const RenderMockup = ({ type }) => {
  if (type === 'law') {
    return (
      <div className="p-8 flex flex-col h-full bg-white text-neutral-900">
         <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-8">
           <div className="font-serif text-2xl tracking-tight font-bold">AURA<span className="font-light">LAW</span></div>
           <div className="flex gap-4">
             <div className="w-10 h-1.5 bg-neutral-200"></div>
             <div className="w-10 h-1.5 bg-neutral-200"></div>
             <div className="w-10 h-1.5 bg-neutral-200"></div>
           </div>
         </div>
         <div className="text-center mb-10">
           <div className="w-3/4 mx-auto h-16 bg-neutral-900 mb-4"></div>
           <div className="w-1/2 mx-auto h-2 bg-neutral-300"></div>
         </div>
         <div className="grid grid-cols-3 gap-6 mt-auto">
            <div className="border-t border-neutral-900 pt-4 flex flex-col gap-2">
               <div className="w-full h-8 bg-neutral-100"></div>
               <div className="w-full h-2 bg-neutral-200"></div>
            </div>
            <div className="border-t border-neutral-900 pt-4 flex flex-col gap-2">
               <div className="w-full h-8 bg-neutral-100"></div>
               <div className="w-full h-2 bg-neutral-200"></div>
            </div>
            <div className="border-t border-neutral-900 pt-4 flex flex-col gap-2">
               <div className="w-full h-8 bg-neutral-100"></div>
               <div className="w-full h-2 bg-neutral-200"></div>
            </div>
         </div>
      </div>
    );
  }
  
  if (type === 'consulting') {
    return (
      <div className="p-10 flex flex-col h-full bg-[#f4f4f5] text-neutral-900">
         <div className="flex justify-between items-center mb-12">
            <div className="w-4 h-4 bg-neutral-900 rounded-sm"></div>
            <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center">
              <div className="w-3 h-px bg-neutral-500"></div>
            </div>
         </div>
         <div className="flex-1 grid grid-cols-2 gap-8">
            <div className="flex flex-col justify-center gap-4">
               <div className="w-20 h-2 bg-neutral-400"></div>
               <div className="w-full h-12 bg-neutral-900 rounded-sm"></div>
               <div className="w-4/5 h-12 bg-neutral-900 rounded-sm"></div>
               <div className="w-24 h-8 border border-neutral-900 rounded-sm mt-4"></div>
            </div>
            <div className="bg-neutral-200 rounded-sm relative overflow-hidden flex flex-col justify-end p-4">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-300 via-neutral-200 to-neutral-200"></div>
               <div className="relative w-3/4 h-24 bg-white shadow-lg p-3 flex flex-col justify-between">
                  <div className="w-1/2 h-2 bg-neutral-200"></div>
                  <div className="w-full h-8 bg-neutral-100 mt-2"></div>
               </div>
            </div>
         </div>
      </div>
    );
  }

  // Fitness
  return (
    <div className="p-0 flex flex-col h-full bg-zinc-900 text-white relative overflow-hidden">
       <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full"></div>
       <div className="p-6 flex justify-between items-center relative z-10">
         <div className="font-display font-bold tracking-widest text-emerald-400">OASIS</div>
         <div className="px-3 py-1 bg-white text-zinc-900 text-[8px] font-bold uppercase rounded-full">Book Class</div>
       </div>
       <div className="px-6 flex-1 flex gap-6 relative z-10">
          <div className="w-1/2 flex flex-col justify-center gap-3">
             <div className="w-full h-8 bg-white/10 rounded-xl"></div>
             <div className="w-5/6 h-8 bg-white/10 rounded-xl"></div>
             <div className="w-full h-2 bg-white/5 rounded-full mt-2"></div>
             <div className="w-2/3 h-2 bg-white/5 rounded-full"></div>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
             <div className="h-32 bg-gradient-to-tr from-emerald-900 to-zinc-800 rounded-2xl border border-white/5 relative overflow-hidden group/card mt-4">
                <div className="absolute bottom-3 left-3 w-12 h-3 bg-white/20 rounded"></div>
             </div>
             <div className="h-24 bg-zinc-800 rounded-2xl border border-white/5"></div>
          </div>
       </div>
    </div>
  );
};

export default function ProjectShowcase() {
  return (
    <section id="work" className="py-32 md:py-48 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-3xl">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500 mb-6 flex items-center gap-4">
               Selected Work
               <span className="hidden sm:inline-flex items-center gap-2 text-[8px] tracking-widest text-neutral-600 bg-neutral-900 px-2 py-1 rounded">
                 <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span> Concept Demos
               </span>
            </h2>
            <h3 className="text-5xl md:text-6xl font-display font-medium text-white leading-[1.05] tracking-tighter">
              A glimpse into engineering <span className="italic font-light text-neutral-400"><br className="hidden md:block"/> market-leading digital experiences.</span>
            </h3>
            <p className="text-neutral-500 font-light mt-6 sm:hidden text-xs">Selected concept demos created to showcase visual direction and structure.</p>
          </div>
          <div className="pb-2 hidden md:block">
            <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-600 max-w-[200px] text-right">
               Selected concept demos created to showcase visual direction and structure.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-32 relative">
          {projects.map((project, index) => (
            <Link to={project.link} key={index} className="group block focus:outline-none">
               <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-center cursor-pointer relative`}>
                 
                 {/* Project Visual / Mockup */}
                 <div className="w-full lg:w-7/12">
                   <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-neutral-900 block transition-all duration-700 group-hover:shadow-[0_0_80px_rgba(255,255,255,0.08)]">
                     
                     <div className="absolute inset-x-0 inset-y-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/5 z-20 pointer-events-none flex items-center justify-center">
                        <div className="px-6 py-3 bg-neutral-900 text-white rounded-full font-semibold text-sm tracking-wide shadow-2xl backdrop-blur-md border border-neutral-700 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           Explore Demo
                        </div>
                     </div>

                     {/* Outer abstract container */}
                     <div className="absolute inset-6 md:inset-10 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.02] bg-black border border-white/10 flex flex-col z-10">
                        {/* Browser/Window Header */}
                        <div className="h-10 border-b border-white/10 flex items-center px-6 gap-2 bg-white/5 backdrop-blur-md shrink-0">
                           <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                        </div>
                        {/* Realistic UI Layout */}
                        <div className="flex-1 relative overflow-hidden pointer-events-none">
                           <RenderMockup type={project.mockupType} />
                        </div>
                     </div>
                   </div>
                 </div>

                 {/* Project Info */}
                 <div className="w-full lg:w-5/12 flex flex-col justify-center">
                   <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500 mb-6 flex items-center gap-4">
                     <span className="w-8 h-px bg-neutral-700 group-hover:w-12 transition-all duration-500"></span>
                     {project.category}
                   </p>
                   <h4 className="text-4xl lg:text-5xl font-display font-medium text-white mb-8 tracking-tighter group-hover:text-neutral-300 transition-colors">
                     {project.title}
                   </h4>
                   <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-light">
                     {project.description}
                   </p>
                   
                   <div className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white transition-colors">
                     View Demo
                     <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white transition-colors duration-500 group-hover:bg-white group-hover:text-black">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                     </div>
                   </div>
                 </div>
                 
               </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
