import React from 'react';
import { Target, Search, Fingerprint, ShieldCheck } from 'lucide-react';

export default function WhyChooseMeSection() {
  const reasons = [
    {
      icon: Fingerprint,
      title: "Designed for Perception",
      description: "Everything is strategically designed to fit a brand's specific identity and goals, ensuring a unique and authoritative market position."
    },
    {
      icon: ShieldCheck,
      title: "Built to Establish Trust",
      description: "Visitors judge credibility in seconds. Highly polished interfaces immediately communicate that a business is established, reliable, and premium."
    },
    {
      icon: Target,
      title: "Structured for Real Use",
      description: "Beautiful is good, but conversion is better. Layouts are strictly structured to guide users naturally toward taking action or buying."
    },
    {
      icon: Search,
      title: "Refined Down to Details",
      description: "From impeccable spacing to subtle micro-animations and faultless mobile display, every pixel is obsessed over before launch."
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 justify-between">
          
          {/* Left Sticky Content */}
          <div className="lg:w-5/12">
            <div className="sticky top-40">
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-6">Service Standards</h2>
              <h3 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-8 leading-[1.05] tracking-tighter">
                Engineering digital <span className="italic font-light text-neutral-400">authority.</span>
              </h3>
              <p className="text-lg text-neutral-500 mb-12 leading-relaxed font-light">
                A great website isn't just lines of code—it's a high-performing strategic asset. Elevating a market presence requires impeccable design, technical precision, and a deep understanding of modern user psychology.
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-900 hover:text-neutral-500 transition-colors group">
                Discuss a Project
                <span className="w-12 h-[1px] bg-neutral-900 group-hover:w-16 group-hover:bg-neutral-500 transition-all duration-500 block"></span>
              </a>
            </div>
          </div>

          {/* Right Content Grid */}
          <div className="lg:w-7/12 grid sm:grid-cols-2 gap-x-12 gap-y-20">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="flex flex-col relative group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-100 flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <Icon size={18} className="text-neutral-600" />
                  </div>
                  <h4 className="text-xl font-display font-medium tracking-tight text-neutral-900 mb-4 block">
                    {reason.title}
                  </h4>
                  <p className="text-neutral-500 font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
