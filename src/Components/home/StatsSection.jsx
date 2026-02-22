import React from 'react';
import Reveal from '../../Components/Reveal';

const items = [
  { value: '30+', label: 'Years of Experience', detail: 'Crafting legacies since 1995' },
  { value: '500+', label: 'Projects Delivered', detail: 'Across residential & commercial' },
  { value: 'Central', label: 'India Presence', detail: 'Focusing on Katni & Indore' },
];

const StatsSection = () => {
  const brandWine = '#B87333';
  const darkTeal = '#0e3a40';

  return (
    <section className="py-24 md:py-32 bg-[#0e3a40] text-white relative overflow-hidden">
      {/* Subtle Grainy Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.1}>
              <div className="flex flex-col relative group">
                {/* Background "Ghost" Number */}
                <div className="absolute -top-10 -left-4 font-serif text-9xl text-white/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-white/[0.07]">
                  0{i + 1}
                </div>

                <div className="flex items-baseline gap-2">
                  <div className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-none mb-4">
                    {it.value}
                  </div>
                </div>

                <div className="h-[2px] w-8 bg-[#B87333] mb-6 transition-all duration-700 group-hover:w-24" />

                <div className="uppercase tracking-[0.4em] text-[10px] font-bold text-stone-300 mb-2">
                  {it.label}
                </div>
                <div className="text-stone-400 font-light text-xs italic tracking-wider">
                  {it.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;