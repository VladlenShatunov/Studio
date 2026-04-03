import React from 'react';
import { Smartphone, Code2, Zap, LayoutTemplate, Briefcase } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: Smartphone, label: 'Responsive Design' },
    { icon: Code2, label: 'Clean Codebase' },
    { icon: Zap, label: 'Fast Performance' },
    { icon: LayoutTemplate, label: 'Premium Aesthetics' },
    { icon: Briefcase, label: 'Business Focused' },
  ];

  return (
    <section className="bg-white border-b border-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-4 opacity-60 hover:opacity-100 transition-opacity duration-700">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3 group cursor-default">
                <Icon size={16} className="text-neutral-400 group-hover:text-neutral-900 transition-colors duration-500" />
                <span className="text-[11px] font-semibold text-neutral-500 group-hover:text-neutral-900 transition-colors duration-500 tracking-[0.2em] uppercase">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
