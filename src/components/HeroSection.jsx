import React from 'react';
import { ArrowRight, LayoutTemplate, Activity, BarChart3, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden bg-[#FAFAFA] isolate">
      {/* Subtle Background Lighting */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-[120px] sm:top-[-20rem]">
        <div className="relative left-1/2 -z-10 w-[80rem] -translate-x-1/2 aspect-[1155/678] rotate-[30deg] bg-gradient-to-tr from-neutral-200 to-neutral-50 opacity-50 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column - Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white shadow-sm mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
            <span className="text-[11px] tracking-widest uppercase font-semibold text-neutral-600">Premium Digital Studio</span>
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] font-display font-medium text-neutral-900 leading-[1.05] tracking-tighter mb-8">
            Built to look <span className="text-neutral-400 italic font-light">professional.</span><br/> Designed to be <span className="text-neutral-600">remembered.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-500 mb-12 leading-relaxed max-w-lg font-light">
            A website should do more than exist online. It should represent a business properly, build trust instantly, and create a strong first impression.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a 
              href="#contact" 
              className="group flex justify-center items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-2xl font-medium tracking-wide hover:bg-neutral-800 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
            >
              Start a Project
            </a>
            <a 
              href="#work" 
              className="group flex justify-center items-center gap-2 px-8 py-4 bg-white text-neutral-900 border border-neutral-200 rounded-2xl font-medium tracking-wide hover:border-neutral-300 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-0.5"
            >
              See What's Possible
              <ArrowRight size={16} className="text-neutral-400 group-hover:translate-x-1 group-hover:text-neutral-900 transition-all" />
            </a>
          </div>
        </motion.div>

        {/* Right Column - Realistic Dashboard UI Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative lg:h-[650px] flex justify-center lg:justify-end items-center perspective-1000"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] group">
            
            {/* Ambient Shadow Box */}
            <div className="absolute inset-4 bg-neutral-900/5 rounded-3xl transform rotate-2 blur-2xl transition-transform duration-700 group-hover:rotate-6"></div>

            {/* Main Application Window */}
            <div className="absolute inset-0 bg-white rounded-[2rem] border border-neutral-200 shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:-rotate-1">
              
              {/* Browser/App Header */}
              <div className="h-12 border-b border-neutral-100 flex items-center justify-between px-5 bg-neutral-50/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 border border-neutral-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 border border-neutral-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 border border-neutral-300"></div>
                </div>
                <div className="w-32 h-5 bg-white border border-neutral-200 rounded-md flex items-center justify-center">
                  <div className="w-16 h-1.5 bg-neutral-200 rounded-full"></div>
                </div>
                <div className="w-16"></div> {/* Spacer for flex balance */}
              </div>

              {/* Application Body Layout */}
              <div className="flex-1 flex bg-[#FBFCFD]">
                {/* Sidebar */}
                <div className="w-16 border-r border-neutral-100 flex flex-col items-center py-6 gap-6 bg-white z-10">
                   <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center relative">
                     <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
                   </div>
                   <div className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-neutral-900 bg-neutral-50"><LayoutTemplate size={16}/></div>
                   <div className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-neutral-900"><Activity size={16}/></div>
                   <div className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-neutral-900"><BarChart3 size={16}/></div>
                   <div className="mt-auto w-8 h-8 rounded-full bg-neutral-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400"></div>
                   </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
                   {/* Top Bar inside App */}
                   <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                     <div className="flex flex-col gap-1.5">
                       <h4 className="text-sm font-semibold text-neutral-900 font-display">Overview Dashboard</h4>
                       <p className="text-[10px] text-neutral-400">Showing metrics for last 30 days</p>
                     </div>
                     <div className="px-3 py-1.5 rounded-md bg-neutral-900 text-white text-[10px] font-medium">Export Report</div>
                   </div>
                   
                   {/* Metrics Row */}
                   <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 rounded-xl border border-neutral-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        <div className="flex items-center gap-2 mb-3">
                           <Globe size={14} className="text-neutral-400"/>
                           <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Total Visits</span>
                        </div>
                        <div className="flex items-end gap-2">
                           <span className="text-2xl font-display font-medium text-neutral-900">124.5K</span>
                           <span className="text-[10px] text-green-500 font-medium pb-1">+12%</span>
                        </div>
                     </div>
                     <div className="p-4 rounded-xl border border-neutral-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        <div className="flex items-center gap-2 mb-3">
                           <Activity size={14} className="text-neutral-400"/>
                           <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Conversions</span>
                        </div>
                        <div className="flex items-end gap-2">
                           <span className="text-2xl font-display font-medium text-neutral-900">4.2%</span>
                           <span className="text-[10px] text-green-500 font-medium pb-1">+0.8%</span>
                        </div>
                     </div>
                   </div>

                   {/* Main Chart Area */}
                   <div className="flex-1 rounded-xl border border-neutral-100 bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-6 border-b border-neutral-50 pb-2">Revenue Growth</div>
                      <div className="flex-1 flex items-end gap-2 justify-between px-2 pb-2">
                         {/* Bar Chart Simulation */}
                         {[40, 65, 45, 80, 55, 90, 75, 100].map((height, i) => (
                           <div key={i} className="w-full bg-neutral-100 rounded-t-sm relative group/bar hover:bg-neutral-200 transition-colors" style={{ height: `${height}%` }}>
                             {i === 7 && <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[9px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">$12k</div>}
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

              </div>
            </div>

            {/* Floating Element: Premium Badge */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
               className="absolute -right-6 top-24 p-0 bg-white backdrop-blur-xl rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-neutral-100 overflow-hidden"
            >
              <div className="p-4 flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                 </div>
                 <div>
                   <p className="text-[9px] text-neutral-400 font-bold tracking-widest uppercase">System Status</p>
                   <p className="text-sm font-display font-medium text-neutral-900">Optimized</p>
                 </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
