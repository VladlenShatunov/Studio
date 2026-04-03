import React from 'react';
import { MonitorSmartphone, LayoutGrid, Zap, PenTool, RefreshCcw, Headset } from 'lucide-react';

const services = [
  {
    title: 'Business Websites',
    description: 'Structured, high-quality websites designed to present businesses clearly and professionally across all devices.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Landing Pages',
    description: 'Focused, high-converting single-page experiences built strictly for campaigns and measurable lead generation.',
    icon: LayoutGrid,
  },
  {
    title: 'Portfolio Platforms',
    description: 'Elegant showcases for creatives and agencies who require their digital presence to be as polished as their work.',
    icon: PenTool,
  },
  {
    title: 'Website Redesigns',
    description: 'Modernizing outdated architecture to improve user experience, aesthetic quality, and technical performance.',
    icon: RefreshCcw,
  },
  {
    title: 'Responsive Engineering',
    description: 'Flawless experiences across mobile, tablet, and desktop, ensuring zero friction across every single viewport.',
    icon: Zap,
  },
  {
    title: 'System Support',
    description: 'Reliable infrastructure maintenance, routine updates, and scaling to ensure continuous digital stability.',
    icon: Headset,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 md:py-40 bg-[#FAFAFA] relative border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-6">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-8 tracking-tighter leading-[1.05]">
            Comprehensive solutions for <span className="italic text-neutral-400 font-light">modern brands.</span>
          </h3>
          <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
            A premium online presence requires more than code. It requires strategic positioning, flawless execution, and an obsession with detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-white p-10 rounded-[2rem] border border-transparent hover:border-neutral-200 transition-all duration-700 relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 cursor-default"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-8 border border-neutral-100 group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors duration-500">
                    <Icon size={20} className="text-neutral-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  <h4 className="text-xl font-display font-medium text-neutral-900 mb-4 tracking-tight">
                    {service.title}
                  </h4>
                  
                  <p className="text-neutral-500 font-light leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
