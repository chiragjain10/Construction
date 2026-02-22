import React from 'react';
import Reveal from '../../Components/Reveal';
import { ShieldCheck, CheckCircle2, Layers, Building2 } from 'lucide-react';

const points = [
  { icon: ShieldCheck, title: 'Quality Materials', desc: 'Specified and verified at each stage.' },
  { icon: Layers, title: 'Transparent Process', desc: 'Clear milestones and reporting.' },
  { icon: Building2, title: 'Trusted Legacy', desc: 'Repeat clients across cities.' },
  { icon: CheckCircle2, title: 'Experienced Team', desc: 'Three decades of practice.' },
];

const WhyChooseUs = () => {
  const brandWine = '#B87333';
  const darkTeal = '#0e3a40';

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-5 sticky top-32">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="uppercase tracking-[0.6em] text-[10px] font-bold" style={{ color: brandWine }}>
                  Distinction
                </span>
                <div className="h-[1px] w-12 bg-stone-200" />
              </div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] mb-8" style={{ color: darkTeal }}>
                A disciplined <br />
                <span className="italic text-stone-400 font-light">approach.</span>
              </h2>
              <p className="text-stone-500 font-light text-lg leading-relaxed max-w-sm">
                We combine design-led thinking with accountable execution to deliver spaces that endure in function and form.
              </p>
            </Reveal>
          </div>

          {/* Right Side: Architectural List */}
          <div className="lg:col-span-7 border-t border-stone-200">
            {points.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.1} side="right">
                  <div className="group flex flex-col md:flex-row items-start md:items-center py-10 border-b border-stone-100 hover:bg-stone-50/50 transition-all duration-700 px-4">
                    <div className="mb-4 md:mb-0 md:w-1/4">
                       <Icon size={28} strokeWidth={1} className="transition-colors duration-500 group-hover:text-[#B87333]" style={{ color: darkTeal }} />
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="font-serif text-2xl mb-2 transition-colors duration-500 group-hover:text-[#B87333]" style={{ color: darkTeal }}>
                        {p.title}
                      </h3>
                      <p className="text-stone-500 font-light tracking-wide italic">
                        {p.desc}
                      </p>
                    </div>
                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                       <div className="w-12 h-[1px]" style={{ backgroundColor: brandWine }} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;